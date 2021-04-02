const users = require('./db/users');
const user = {  
  _id: 'c0bbc9edbf2dd5cad75205ce96007315',
  _rev: '1-8f436fdbd00a8ca519b457fb37f8156e',
  username: 'john',
  email: 'john@example.com',
  access_token: 'some access token'
};
users.update(user, function(err) {  
  if (err) {
    console.error(err);
  }
  else {
    console.log('user updated');
  }
});