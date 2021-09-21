let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, text }) => {
if (!text) throw `Masukan merk Hp`
let res = await fetch(`https://api.zeks.xyz/api/gsmArena?apikey=hanyadella&q=${text}`)
if (res.status !== 200) throw await res.text()
let json = await res.json()
let str = `Title: ${json.data.title}
Desc: ${json.data.few_desc}
Spesifikasi
${json.data.full_desc.string}
`
conn.sendFile(m.chat, json.data.thumb, 'gsmarena.png', str, m)
}
handler.help = ['gsmarena']
handler.tags = ['internet']
handler.command = /^(gsmarena|spekhp)$/i

module.exports = handler
