let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `

`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Terverifikasi Member Premium*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['main']
handler.command = /@6281351687192|@6287837078713/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
