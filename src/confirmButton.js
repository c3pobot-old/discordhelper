'use strict'
const ReplyMsg = require('./replyMsg')
const ReportDebug = require('./reportDebug')
const JobCache = require('./jobCache')
module.exports = async(obj, msg)=>{
  try{
    ReportDebug(obj, 'Sending confirmButton')
    await redis.setTTL('button-'+obj.id, obj, 600)
    await JobCache.removeJob(obj.jobId)
    MSG.WebHookMsg(obj?.token, {
      content: msg,
      components: [{
        type: 1,
        flags: 64,
        components: [
          {
            type: 2,
            label: 'Yes',
            style: 3,
            custom_id: JSON.stringify({id: obj.id, response: 'yes'})
          },
          {
            type: 2,
            label: 'No',
            style: 4,
            custom_id: JSON.stringify({id: obj.id, response: 'no'})
          }
        ]
      }]
    }, 'PATCH')
  }catch(e){
    console.error(e)
  }
}
