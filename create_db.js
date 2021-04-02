const couch = require('./couchdb');

const create=async()=>{
try{
   await couch.db.create('test2')
}catch(e)
{
    console.error(e)
}
}

create()