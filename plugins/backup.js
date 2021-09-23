let fs = require('fs')
const moment = require('moment-timezone')
let handler = async (m, { conn }) => {
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    await global.db.write()
    conn.reply(m.sender, `Database: ${time} ${date}`)
    conn.sendFile(m.sender, fs.readFileSync(`./database.json`), `database.json`, '', m, false, { mimetype: 'application/json' })
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup(db|database)?)$/i
handler.owner = true
module.exports = handler
