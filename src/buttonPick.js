'use strict'
const ReplyMsg = require('./replyMsg')
const ReportDebug = require('./reportDebug')
const JobCache = require('./jobCache')
module.exports = async(obj = {}, msg, method = 'PATCH')=>{
  try{
    ReportDebug(obj, 'Sending buttonPick')
    await redis.setTTL('button-'+obj.id, obj, 600)
    await JobCache.removeJob(obj.jobId)
    if(msg?.file || msg?.files){
      MSG.WebHookFile(obj?.token, msg, method)
    }else{
      MSG.WebHookMsg(obj?.token, msg, method)
    }
  }catch(e){
    console.error(e)
  }
}
