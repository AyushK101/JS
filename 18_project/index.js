// all the information about telegram server connection in under the package
const { Telegraf } = require("telegraf");
const axios = require('axios');
/**
 * how to get the secret token for creating a bot ?
 * => open telegram and search for botFather
 * => to read instructions type/start and press enter
 * => to create a new bot , type /newbot and press enter
 * => it will ask a bot name
 * => then it will ask for a username ending for with a `bot`
 * => https://t.me/cding_bot
 * =>
 */
const bot = new Telegraf("TOKEN");

/**
 * These are events and this is called as event based programming , where you actually subscribe to a particular event.
 * When you press that start button , telegram actually hits it as a start action , and calls the callback
 * 1. BOT.COMMAND(command, handler): Define an action to be executed when a specific command is received.
 * 2. BOT.ON(event, handler): Register event handlers for various Telegram events such as 'text', 'photo', 'video', 'sticker', etc.
 * 3. BOT.HELP
 * 4. BOT.HEARS(text, handler): Define an action to be executed when a message containing a specific text or pattern is received.
 * 5. 
 * 
 */

bot.start((ctx) => ctx.reply("welcome coding geek ! type=> 1. '/bst' for bst code 2. '/arrowjs' for arrow js code 3. '/this' for this code snippet ")); //ctx = context


let binarySearchJs = "binary search code";
bot.command("binarySearchJs", (ctx) => ctx.reply(binarySearchJs));


bot.on("sticker", (ctx) => ctx.reply("👍"));


bot.help((ctx) => ctx.reply("chill !"));

 
bot.hears("hi", (ctx) => ctx.reply("Hey there!"));


bot.hears("what's that?", Telegraf.reply("AiYaN ? 🍆 bAnGaN"));


bot.hears("bye", (ctx) => ctx.reply("okay , nice meeting you SIR !"));


//axios 
//bst code
bot.command('bst' , async (ctx) => {
  const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Sep_3/bst.js')
  .then(response => {
    return ctx.reply(response.data);
})
.catch( (error) => {
    console.log(`error is  ${error}`);
})
})

//arrowjs
bot.command('arrowjs' , async (ctx) => {
    let response = axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_5/arrow_functions_this.js')
    .then(response => {
        return ctx.reply(response.data);
    })
    .catch( (error) => {
        console.log(`error is  ${error}`);
    })
})

//this function
bot.command('this' , async (ctx) => {
    let response = axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_5/this.js')
    .then(response => {
        return ctx.reply(response.data);
    })
    .catch( (error) => {
        console.log(`error is  ${error}`);
    })
})





bot.launch(); //bot get connected to telegram servers



