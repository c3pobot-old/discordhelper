'use strict'
module.exports = (id)=>{
  try{
    if(Jobs[id]){
      const tempObj = JSON.parse(Jobs[id])
      if(process.env.LOCAL_QUE_KEY) localQue.rem(process.env.LOCAL_QUE_KEY, tempObj)
      delete Jobs[id]
    }
  }catch(e){
    console.error(e)
  }
}
