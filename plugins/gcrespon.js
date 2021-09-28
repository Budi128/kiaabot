let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `

╭─「 *MASUK GRUP*」
│ 
│◦ _10k/Bulan_
│
│◦ _Metode Pembayaran_
│ *[GO-PAY]*
│◦ *Pulsa = 15000*
│
│ ➥ *Chat  Owner*
│ wa.me/6281290722307
└━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*「 ᴍᴀsᴜᴋ ᴋᴇ ɢʀᴜᴘ 」*', 'status@broadcast')
}
handler.customPrefix = /Undangan Untuk Bergabung/i
handler.command = new RegExp

module.exports = handler
