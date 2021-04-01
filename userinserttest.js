const users = require('./db/users');

const user = {  
    email: 'joy@example.com',
    name: 'Joy Doe',
    address: '1 Sesame Street'
  }

users.create(user,(err)=> {  
    if (err) {
      throw err;
    }
    else {
      console.log('user inserted');
    }
  })
