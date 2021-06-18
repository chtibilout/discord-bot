const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('ODU0NjYzNTczMTM3OTE1OTA1.YMnNeg.E0RpIExiK52ArSX13HRTPNHxNCE')

bot.on('message', message => {
    if (message.content === 'bonjour') {
      message.reply('salut!')
    }
  })

  bot.on('message', message => {

    if (message.content.startsWith(':play')) {
      // On récupère le premier channel audio du serveur
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      // On récupère les arguments de la commande 
      // il faudrait utiliser une expression régulière pour valider le lien youtube
      let args = message.content.split(':join')
      // On rejoint le channel audio
      voiceChannel
        .join()
        .then(function (connection) {
          // On démarre un stream à partir de la vidéo youtube
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          // On envoie le stream au channel audio
          // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })

  bot.on('message', message => {
    if (message.content === 'hello') {
      message.reply('salut!')
    }
  })

  bot.on('message', message => {
    if (message.content === 'coucou') {
      message.reply('salut!')
    }
  })

  bot.on('message', message => {
    if (message.content === 'cc') {
      message.reply('salut!')
    }
  })

  bot.on('message', message => {
    if (message.content === 'bjr') {
      message.reply('salut!')
    }
  })
  bot.on('ready', () => {
    bot.user.setActivity(`Salut ! Je suis actuellement sur ${bot.guilds.cache.size} serveur(s)! rejoin moi discord.io/lestarésmc`, {type: 'PLAYING'});
 })
 bot.on('message', message => {
  if (message.content === 'slt') {
    message.reply('salut!')
  }
})
bot.on('message', message => {
  if (message.content === 'les tarés sur mc') {
    message.reply('mon préfix est      :')
  }
})
bot.on('message', message => {
  if (message.content === ':help') {
    message.reply('ajouter moi des commande en faisant la commande :add')
  }
})
bot.on('message', message => {
  if (message.content === ':add') {
    message.reply('le bot est actuellement en cours de développement pour en savoir plus contacter @Alt-F4#9999')
  }
})
bot.on('message', message => {
  if (message.content === 'au revoir') {
    message.reply('salut merci de ta companie! :D')
  }
})