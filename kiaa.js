let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Iya Ada Apa Kak?*

*Ketik* #menu *untuk melihat menu BOT!*
`.trim()

conn.fakeReply(m.chat, info,'0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.customPrefix = /@6285215059410|kiaa|bot/i
handler.command = new RegExp

module.exports = handler
