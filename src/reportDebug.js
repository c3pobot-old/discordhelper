'use strict'
const types = {
  1: 'ping',
  2: 'cmd',
  3: 'cpt',
  4: 'ac'
}
const getCmd = async(obj = {})=>{
  try{
    let cmd = '/'+obj?.name
    if(obj?.options?.length > 0){
      for(let i in obj.options){
        if(obj.options[i].type === 1) cmd += ' '+obj.options[i].name
      }
    }
    return cmd
  }catch(e){
    console.error(e);
  }
}
module.exports = async(obj = {}, content)=>{
  try{
    if(process.env.LOG_LEVEL === 'debug'){
      let msg = (new Date())?.toLocaleString('en-US', {timeZone: 'America/New_York'}), cmdType = 'cmd', cmd
      if(obj.data) cmd = await getCmd(obj?.data)
      if(!cmd) cmd = obj.cmd
      if(cmd) msg += '\n'+cmd
      if(obj.confirm) cmdType = 'button'
      if(obj.select) cmdType = 'select'
      msg += '\n'+cmdType
      if(obj.guild_id) msg += '\nsId : '+obj.guild_id
      if(obj.channel_id) msg += '\nchId : '+obj.channel_id
      if(obj?.member?.user){
        msg += '\ndId : '+obj.member.user.id
        msg += '\nuser : '+obj.member.user.username+':'+obj.member.user.discriminator
      }

      if(content) msg += '\n'+content
      console.log(msg)
    }
  }catch(e){
    console.error(e);
  }
}
