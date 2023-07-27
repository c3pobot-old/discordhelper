'use strict'
const JobCache = require('./jobCache')
module.exports = async(obj = {}, content)=>{
  try{
    await JobCache.removeJob(obj.jobId)
    if(content.file || content.files){
      MSG.SendFile(obj, content);
    }else {
      MSG.SendMsg(obj, content);
    }
  }catch(e){
    console.error(e);
  }
}
