const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/hentai', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Sange Kok Sama 2D*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
handler.help = ['hentai']
handler.tags = ['wibu']
handler.command = /^(hentai)$/i
handler.limit = 5
handler.premium = false
module.exports = handler
