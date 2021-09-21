let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`*Nama* :${global.db.data.users[who].name}\n*Limit* :${global.db.data.users[who].limit}\n*EXP* :${global.db.data.users[who].exp}\n*Level* :${global.db.data.users[who].level}\n*Rank* :${global.db.data.users[who].role}`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit|exp|level|rank)$/i
module.exports = handler
