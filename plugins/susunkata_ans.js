let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Tipe:/i.test(m.quoted.text)) return !0
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    if (!(id in conn.susunkata)) return m.reply('_*Soal itu telah berakhir*_')
    if (m.quoted.id == conn.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            global.DATABASE._data.users[m.sender].limit += conn.susunkata[id][2]
            m.reply(`_*Benar!*_`)
            clearTimeout(conn.susunkata[id][3])
            delete conn.susunkata[id]
        } else if (m.text.toLowerCase().startsWith(json.jawaban.split` `[0])) m.reply(`_*Dikit Lagi!*_`)
        else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`_*Dikit Lagi!*_`)

        else m.reply(`_*Salah!*_`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
