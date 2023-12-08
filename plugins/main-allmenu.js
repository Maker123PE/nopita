import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
ʜᴀʟᴏ ᴋᴀᴋ 👋. ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

ଓ═┅═━–═┅═━–═┅═━–๑
╏➵ *sᴛᴀᴛᴜs :* ᴘᴜʙʟɪᴄ
╏➵ *ʟᴀɴɢᴜᴀɢᴇ :* ɴᴏᴅᴇᴊs
╏➵ *ʙᴀɪʟᴇʏ :* @ᴀᴅɪᴡᴀsʜɪɴɢ
╏➵ *ʙᴀɪʟᴇʏ sᴜᴘᴘ :* @ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs
┗–––––––––––––––✦
╭─────────────●
├ᴋᴇᴛɪᴋ *[ .ᴀʟʟᴍᴇɴᴜ ]*
├ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ
╰─────────────●
╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼
*MY CREATOR:* *NOVI-MD*
╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼
`;
 let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

conn.sendMessage(m.chat, {
    video: fs.readFileSync('./media/thumb2.mp4'),
    mimetype: 'video/mp4',
    fileLength: 100000000000,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 5,
    contextInfo: {
      forwardingScore: 2023, 
      isForwarded: false,
      mentionedJid: [m.sender]
    }
  },
  )
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
/*
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Novi bot`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/8c2f4e840203a4ee6dec8.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})*/
}
handler.command = /^(menu|help)$/i;

export default handler;