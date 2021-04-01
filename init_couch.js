const async=require('async')
const couch=require('./couchdb')

const databases=['users','messages']

const initCouch=(cb)=> {  
    createDatabases(cb);
  }

  const createDatabases=(cb)=> {  
    async.each(databases, createDatabase, cb);
  }

  const createDatabase=(db, cb)=> {  
    couch.db.create(db,(err)=> {
      if (err && err.statusCode == 412) {
        err = null;
      }
      cb(err);
    });
  }


module.exports = initCouch