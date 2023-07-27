'use strict'
const JobCache = require('./jobCache')
module.exports = async(obj = {}, content)=>{
  try{
    const job = await JobCache.getJob(obj)
    if(job){
      if(content?.file){
        MSG.WebHookFile(obj.token, content, 'POST')
      }else{
        MSG.WebHookMsg(obj.token, content, 'POST')
      }
    }
  }catch(e){
    console.error(e)
  }
}
