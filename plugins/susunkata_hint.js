let handler = async (m, { conn, isPrems, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
    users = global.DATABASE.data.users[m.sender]
    if (users.limit < 1) {
        throw `Limit kamu habis, cara mendapatkan Limit:
  
• Membeli *${usedPrefix}premium*
• Menjawab *${usedPrefix}math* - jika benar kamu mendapat 1 Limit`
    } else {
        if (!isPrems) users.limit -= 1
    }
    let json = conn.susunkata[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '_')
    conn.reply(m.chat, '```' + nyanya + '```\n_*Balas soalnya, bukan yg ini!*_', conn.susunkata[id][0])
}
handler.command = /^hint((t|s)k|(tebak|susun)?kata)$/i
module.exports = handler
