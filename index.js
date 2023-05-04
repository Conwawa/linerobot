// 引用 dotenv 讀取 env
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN

})

bot.on('message', (event) => {
  if (event.message.type === 'text') {
    event.reply(event.message.text)
  }
})
bot.listen('/', process.env.port || 3000, () => {
  console.log('機器人啟動')
})
