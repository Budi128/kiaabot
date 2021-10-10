let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i // hanya link grup wa
//let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i // semua jenis link
handler.before = function (m, { isBotAdmin, isAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.DATABASE.data.chats[m.chat]
    let isLink = linkRegex.exec(m.text)

    if (chat.antiLink && isLink && !isAdmin && !m.isBaileys) {
        conn.reply(m.chat, `kak @${m.chat.split("-")[0]}, ada yang share link`, m, { contextInfo: { mentionedJid: [m.chat.split("-")[0] + '@s.whatsapp.net'] } })
        if (isAdmin || !isBotAdmin) return true
        this.groupRemove(m.chat, [m.sender])
    }
    return true
}
module.exports = handler
