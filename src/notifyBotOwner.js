'use strict'
module.exports = async(content)=>{
  const obj = (await mongo.find('botSettings', {_id: '1'}))[0]
  if(obj && obj.reportSId && obj.reportChId){
    MSG.SendMsg({chId: obj.reportChId}, content)
  }else{
    if(process.env.BOT_OWNER_ID) MSG.SendDM(process.env.BOT_OWNER_ID, content)
  }
}
