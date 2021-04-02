
const users = require('../couchdb').use('users');

// Create user
//exports.create = schemas.validating('user', createUser);

exports.create =function createUser(user, cb) {  
  users.insert(user, cb)
}

//exports.update = schemas.validating('user', updateUser);
exports.update =function updateUser(user, cb) {  
  users.insert(user, cb)
}

exports.delete =function deleteUser(user, cb) {
  //console.log(user)  
  users.destroy(user, cb)
}