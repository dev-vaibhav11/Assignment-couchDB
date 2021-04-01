const couch=require('./couchdb')

couch.db.create('test2',(err)=>{
    if (err && err.statusCode != 412) {
        console.error(err);
      }
      else {
        console.log('database test2 exists');
      }
    })