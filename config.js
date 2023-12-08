import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['51902679067', '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '51902679067'
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.namebot = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.wm = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.stickpack = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.stickauth = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.fotonya = 'https://aemt.me/file/2YMdsOwiE2jV.jpg'
global.fotonya2 = `https://aemt.me/file/1zJzovDRFsvB.jpg`
// Link Sosmed
global.sig = 'https://instagram.com/SysSolutions.peru'
global.syt = 'https://youtube.com/@SysSolutionsperu'
global.sgh = 'https://github.com/SysSolutions'
global.sgc = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'
// Donasi

global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '51902679067'
// Info Wait
global.wait = 'Loading mohon di tunggu ya Cukg...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = '5dRkJDWvIG'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "5dRkJDWvIG",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
