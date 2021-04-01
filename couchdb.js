const nano=require('nano')

module.exports=nano(process.env.COUCHDB_URL || 'http://'+process.env.USER+':'+process.env.PASS+'@127.0.0.1:5984');