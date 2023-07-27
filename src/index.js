'use strict'
const Cmds = {}
const JobCache = require('./jobCache')
Cmds.AddJob = JobCache.addJob
Cmds.ButtonPick = require('./buttonPick')
Cmds.ConfirmButton = require('./confirmButton')
Cmds.CheckBotOwner = require('./checkBotOwner')
Cmds.EnumPerms = require('./enumPerms')
Cmds.GetGuildShardId = require('./getGuildShardId')
Cmds.GetOptValue = require('./getOptValue')
Cmds.GetJob = JobCache.getJob
Cmds.GetRole = require('./getRole')
Cmds.NotifyBotOwner = require('./notifyBotOwner')
Cmds.RemoveJob = JobCache.removeJob
Cmds.ReplyButton = require('./replyButton')
Cmds.ReplyComponent = require('./replyComponent')
Cmds.ReplyError = require('./replyError')
Cmds.ReplyMsg = require('./replyMsg')
Cmds.ResponseMsg = require('./responseMsg')
Cmds.SendMsg = require('./sendMsg')
Cmds.TruncateString = require('./truncateString')
Cmds.ReportDebug = require('./reportDebug')
module.exports = Cmds