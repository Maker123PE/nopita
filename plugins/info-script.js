import fs from 'fs'

let handler = async (m, { conn }) => {
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
	let pfft = `*NOVI - MD V.1.0*
	
*Source Code Type:*
 • Base : Plugins
 • Language : NodeJs
 • Bailey : @adiwashing/baileys
 • Bailey Supp : @whiskeysockets/baileys

Jika anda menginginkan Script ini silahkan hubungi nomor dibawah ini:

Owner Contact:
wa.me/14694523233
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Novi Official`,
      body: global.author,
      thumbnailUrl: `https://aemt.me/file/twhSwwJ8fh3F.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sc|script)$/i;

export default handler;