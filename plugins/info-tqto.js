import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
- NOVI
- RAIDEN-MD
- NILOU
- RIZAL
- FALLZX
- PUTZX MOODZ
- DANNI
- KYUU RZY
- <PACAR GW FU JINCHEN>
Penulis Ulang: NOVI/DEWI and RAIDEN
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://aemt.me/file/eGZrLjLezdaN.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;
