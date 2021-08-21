let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 2) ? 'Newbie'
          : ((user.level >= 2) && (user.level <= 4)) ? 'Bronze III'
          : ((user.level >= 4) && (user.level <= 6)) ? 'Bronze II'
          : ((user.level >= 6) && (user.level <= 8)) ? 'Bronze I'
          : ((user.level >= 8) && (user.level <= 10)) ? 'Silver III'
          : ((user.level >= 10) && (user.level <= 12)) ? 'Silver II'
          : ((user.level >= 12) && (user.level <= 14)) ? 'Silver I'
          : ((user.level >= 14) && (user.level <= 17)) ? 'Gold IV'
          : ((user.level >= 17) && (user.level <= 20)) ? 'Gold III'
          : ((user.level >= 20) && (user.level <= 23)) ? 'Gold II'
          : ((user.level >= 23) && (user.level <= 26)) ? 'Gold I'
          : ((user.level >= 26) && (user.level <= 29)) ? 'Master V'
          : ((user.level >= 29) && (user.level <= 32)) ? 'Master IV'
          : ((user.level >= 32) && (user.level <= 35)) ? 'Master III'
          : ((user.level >= 35) && (user.level <= 38)) ? 'Master II'
          : ((user.level >= 38) && (user.level <= 40)) ? 'Master I' 
          : ((user.level >= 40) && (user.level <= 50)) ? '♢'
          : ((user.level >= 50) && (user.level <= 60)) ? '♢♢'
          : ((user.level >= 60) && (user.level <= 70)) ? '♢♢♢'
          : ((user.level >= 70) && (user.level <= 80)) ? '♢♢♢♢'
          : ((user.level >= 80) && (user.level <= 90)) ? '♢♢♢♢♢'    
          : ((user.level >= 90) && (user.level <= 100)) ? '✷'
          : ((user.level >= 100) && (user.level <= 140)) ? '✷✷'
          : ((user.level >= 140) && (user.level <= 180)) ? '✷✷✷'
          : ((user.level >= 180) && (user.level <= 220)) ? '✷✷✷✷'
          : ((user.level >= 220) && (user.level <= 250)) ? '✷✷✷✷✷'
          : ((user.level >= 250) && (user.level <= 350)) ? '✰'
          : ((user.level >= 350) && (user.level <= 450)) ? '✩✩'
          : ((user.level >= 450) && (user.level <= 550)) ? '✬✯✬'
          : ((user.level >= 550) && (user.level <= 650)) ? '✬✬✬✬'
          : ((user.level >= 650) && (user.level <= 1000)) ? '★★★★★'
          : '✯✯✯准将✯✯✯'
  user.role = role
  return true
}

module.exports = handler
