import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `Novi Whatsapp`, `Developer Bot Inc`, `Ponsel`, `fitad34@gmail.com`, `Washington - USA`, `https://youtube.com/@Novi_Novy`, `Just Beginner`]
  ], m)
  }

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler