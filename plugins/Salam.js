let handler = m => m.reply('وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\nWa`alaikumussalam warohmatulohi wabarakatuh')

handler.customPrefix = /assalamualaikum|Assalamu'alaikum|asalam/i
handler.command = new RegExp

module.exports = handler
