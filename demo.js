create(data) {
    return new Promise(async (resolve, reject) => {
      // Get transaction
      const transaction = await sequelize.transaction();
      try {
        logger.log('info', `Create a user`);
        // Find user by username or email or phone
        let user = await this.findUser(data);

        if(!user){

            data.password = Math.random().toString(36).substring(3);

            console.log("data===============>",data)

          // create new user
          user = await new User(data).save({ transaction });

          console.log("user===============>",user)

          // Find roles by name
          let roles = await authorisationService.findRoles(data.roles);

          // Throw error if role doesn't exist
          if (roles.length === 0) {
            throw new NoRecordFoundError(MESSAGES.ROLE_NOT_EXISTS);
          }

          // Commit transaction
          await transaction.commit();

          // Add role to user
          await user.addRoles(roles);

          // throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);

          // Send an wellcome onboard email
          mailer.signUp({ receivers: [user.email], data: { temporaryPassword: data.password, user }}).send();
          resolve(user);
        }else{
            throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);
        }

      } catch (err) {

        logger.log('error', `Create a user :: stacktrace :: ${err}`);
        // Rollback transaction if any errors were encountered
        await transaction.rollback();
        if (err.name === 'SequelizeValidationError') {
          reject(new BadRequestParameterError(err.message));
        } else {
          reject(err);
        }
      }
    });
  }