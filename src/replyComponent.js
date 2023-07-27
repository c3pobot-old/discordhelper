'use strict'
const JobCache = require('./jobCache')
const ReportDebug = require('./reportDebug')
module.exports = async(obj = {}, content, method = 'PATCH')=>{
  try{
    ReportDebug(obj, 'Sending replyComponent')
    await redis.setTTL('component-'+obj.id, obj, 600)
    await JobCache.removeJob(obj.jobId)
    if(content.file || content.files){
      MSG.WebHookFile(obj.token, content, method)
    }else{
      MSG.WebHookMsg(obj.token, content, method)
    }
  }catch(e){
    console.error(e)
  }
}
