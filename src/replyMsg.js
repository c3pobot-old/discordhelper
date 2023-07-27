'use strict'
const JobCache = require('./jobCache')
const ReportDebug = require('./reportDebug')
module.exports = async(obj = {}, content, method = 'PATCH')=>{
  try{
    const job = await JobCache.getJob(obj)
    if(job){
      ReportDebug(obj, 'Sending replyMsg')
      if(content?.file || content?.files){
        MSG.WebHookFile(obj?.token, content, method)
      }else{
        MSG.WebHookMsg(obj?.token, content, method)
      }
    }
  }catch(e){
    console.error(e)
  }
}
