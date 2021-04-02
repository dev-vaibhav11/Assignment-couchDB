const initCouch = require('./init_couch');

initCouch((err)=> { 
  if (err) {
    throw err
  }
  else {
    console.log('couchdb initialized');
  }
});