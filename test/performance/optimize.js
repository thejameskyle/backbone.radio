var Radio = require('../../build/backbone.radio');
var chalk = require('chalk');

function printStatus(name, fn) {
  switch(%GetOptimizationStatus(fn)) {
    case 3: console.log(chalk.green(">> Function '%s' is always optimized"), name); break;
    case 1: console.log(chalk.green(">> Function '%s' is optimized"), name); break;
    case 6: console.log(chalk.yellow(">> Function '%s' is maybe deoptimized"), name); break;
    case 2: console.log(chalk.red(">> Function '%s' is not optimized"), name); break;
    case 4: console.log(chalk.red(">> Function '%s' is never optimized"), name); break;
  }
}

Radio.Requests.request();
%OptimizeFunctionOnNextCall(Radio.Requests.request);
Radio.Requests.request();
printStatus('Radio.Requests.request', Radio.Requests.request);

Radio.Requests.reply();
%OptimizeFunctionOnNextCall(Radio.Requests.reply);
Radio.Requests.reply();
printStatus('Radio.Requests.reply', Radio.Requests.reply);

Radio.Requests.replyOnce();
%OptimizeFunctionOnNextCall(Radio.Requests.replyOnce);
Radio.Requests.replyOnce();
printStatus('Radio.Requests.replyOnce', Radio.Requests.replyOnce);

Radio.Requests.stopReplying();
%OptimizeFunctionOnNextCall(Radio.Requests.stopReplying);
Radio.Requests.stopReplying();
printStatus('Radio.Requests.stopReplying', Radio.Requests.stopReplying);


Radio.Commands.command();
%OptimizeFunctionOnNextCall(Radio.Commands.command);
Radio.Commands.command();
printStatus('Radio.Commands.command', Radio.Commands.command);

Radio.Commands.comply();
%OptimizeFunctionOnNextCall(Radio.Commands.comply);
Radio.Commands.comply();
printStatus('Radio.Commands.comply', Radio.Commands.comply);

Radio.Commands.complyOnce();
%OptimizeFunctionOnNextCall(Radio.Commands.complyOnce);
Radio.Commands.complyOnce();
printStatus('Radio.Commands.complyOnce', Radio.Commands.complyOnce);

Radio.Commands.stopComplying();
%OptimizeFunctionOnNextCall(Radio.Commands.stopComplying);
Radio.Commands.stopComplying();
printStatus('Radio.Commands.stopComplying', Radio.Commands.stopComplying);


new Radio.Channel('channelName');
%OptimizeFunctionOnNextCall(Radio.Channel);
new Radio.Channel('channelName');
printStatus('Radio.Channel', Radio.Channel);

Radio.channel('channelName');
%OptimizeFunctionOnNextCall(Radio.channel);
Radio.channel('channelName');
printStatus('Radio.channel', Radio.channel);


Radio.request('channelName');
%OptimizeFunctionOnNextCall(Radio.request);
Radio.request('channelName');
printStatus('Radio.request', Radio.request);


Radio.reply('channelName');
%OptimizeFunctionOnNextCall(Radio.reply);
Radio.reply('channelName');
printStatus('Radio.reply', Radio.reply);

Radio.replyOnce('channelName');
%OptimizeFunctionOnNextCall(Radio.replyOnce);
Radio.replyOnce('channelName');
printStatus('Radio.replyOnce', Radio.replyOnce);

Radio.stopReplying('channelName');
%OptimizeFunctionOnNextCall(Radio.stopReplying);
Radio.stopReplying('channelName');
printStatus('Radio.stopReplying', Radio.stopReplying);


Radio.command('channelName');
%OptimizeFunctionOnNextCall(Radio.command);
Radio.command('channelName');
printStatus('Radio.command', Radio.command);

Radio.comply('channelName');
%OptimizeFunctionOnNextCall(Radio.comply);
Radio.comply('channelName');
printStatus('Radio.comply', Radio.comply);

Radio.complyOnce('channelName');
%OptimizeFunctionOnNextCall(Radio.complyOnce);
Radio.complyOnce('channelName');
printStatus('Radio.complyOnce', Radio.complyOnce);

Radio.stopComplying('channelName');
%OptimizeFunctionOnNextCall(Radio.stopComplying);
Radio.stopComplying('channelName');
printStatus('Radio.stopComplying', Radio.stopComplying);
