const users = require('./db/users');
const user = {  
  _id: 'whaa@example.com',
  _rev: '1-edf81f3cdc59f380cff1d919e814b53f',
}

users.delete(user,(err)=> {  
  if (err) {
    console.log(err);
  }
  else {
    console.log('user deleted');
  }
});