let handler = async (m, { conn }) => {
let fotonya = 'https://aemt.me/file/1zJzovDRFsvB.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..

▧「 *P E M B A Y A R A N* 」

*🎗️E-Walet*
• Ovo = 083137499954
• Dana = 083137499954
• Gopay = 083137499954
• LinkAja = 083137499954
• Shopee = 083137499954

👤A/N : C**U

Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargai 👽
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler