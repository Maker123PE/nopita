let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *PEMBAYARAN* 」

🎗️E-Walet
• Ovo = 083137499954
• Dana = 083137499954
• Gopay = 083137499954
• LinkAja = 083137499954
• Shopee = 083137499954

👤A/N : C**U

⚠️ 𝗦𝗲𝗿𝘁𝗮𝗸𝗮𝗻 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 [!]
𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗱𝗶 𝗖𝗵𝗮𝘁 𝗣𝗿𝗶𝗯𝗮𝗱𝗶 [!]

`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://aemt.me/file/1zJzovDRFsvB.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['payment']
handler.tags = ['main']
handler.command = /^(pay|payment)$/i
handler.group = false

handler.register = false
export default handler