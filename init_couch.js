const asyncdb=require('async')
const couch=require('./couchdb')

const databases=['users','messages']

module.exports = initCouch

function initCouch(cb){
  
    asyncdb.each(databases, createDatabase,cb);
        
       async function createDatabase(db)
        {  
          try{
              await couch.db.create(db,(err)=> {
                      if (err.statusCode == 412) {
                        err = null;
                      }                    
                    }
                )

            }
          catch(e)
            {
              console.log("i am in catch=="+e)
              throw e
            }
        }
}       


// function initCouch(cb)
//  { 
//    // console.log(cb)
//     createDatabases(cb);
//   }

//   function createDatabases(cb)
//   {  
//     async.each(databases, createDatabase, cb);
//   }

//   function createDatabase(db, cb)
//    {  
//      //console.log(db)
//     couch.db.create(db,(err)=> {
//       if (err && err.statusCode == 412) {
//         err = null;
//       }
//       cb(err);
//       //console.log(err) -->  It returne null if no error
//     });
//   }
