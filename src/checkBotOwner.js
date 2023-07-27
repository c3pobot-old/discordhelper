'use strict'
module.exports = async(obj)=>{
  try{
    let auth = 0
    if(obj.member.user.id == process.env.BOT_OWNER_ID) auth++
    return auth
  }catch(e){
    console.error(e);
  }
}
