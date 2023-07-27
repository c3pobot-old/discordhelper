'use strict'
module.exports = (obj)=>{
  try{
    if(obj.jobId) Jobs[obj.jobId] = JSON.stringify(obj)
  }catch(e){
    console.error(e)
  }
}
