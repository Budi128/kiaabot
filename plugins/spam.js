const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam\n\nContoh:#Spam 62812345|Love You', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 5000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam2 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam3 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam4 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam5 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam6 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam7 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam8 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam9 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam10 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa BOT`
    let spam11 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`
    let spam12 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`
    let spam13 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`
    let spam14 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`
    let spam15 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`
    let spam16 = `*「 WA SPAMMER 」*\n\nPesan : ${pesan}\n\n~kiaa Bot`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam3, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam4, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam5, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam6, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam7, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam8, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam9, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam10, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam11, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam12, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam13, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam14, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam15, MessageType.text)
    
let logs = `[!] Berhasil mengirim spam wa ke nomor ${korban} 15 kali`
    conn.reply(m.chat, logs, m)
}
handler.help = ['ospam <nomor|pesan>']
handler.tags = ['owner']
handler.command = /^(ospam|ospamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 3

module.exports = handler
