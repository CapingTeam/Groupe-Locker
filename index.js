const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})

const request = require('request')

const consolecolor = require("gradient-string")

const q = require('readline-sync')

const config = require('./config')
if (!config.token) throw new TypeError("You must put a token in the config file")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

client.login(config.token).catch(() => {
    
    console.clear()
console.log(consolecolor("#ff0000", "#ff6f00")(`
         ::::::::  :::::::::   ::::::::  :::    ::: :::::::::       :::        ::::::::   ::::::::  :::    ::: 
        :+:    :+: :+:    :+: :+:    :+: :+:    :+: :+:    :+:      :+:       :+:    :+: :+:    :+: :+:   :+:  
        +:+        +:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+      +:+       +:+    +:+ +:+        +:+  +:+   
        :#:        +#++:++#:  +#+    +:+ +#+    +:+ +#++:++#+       +#+       +#+    +:+ +#+        +#++:++    
        +#+   +#+# +#+    +#+ +#+    +#+ +#+    +#+ +#+             +#+       +#+    +#+ +#+        +#+  +#+   
        #+#    #+# #+#    #+# #+#    #+# #+#    #+# #+#             #+#       #+#    #+# #+#    #+# #+#   #+#  
         ########  ###    ###  ########   ########  ###             ########## ########   ########  ###    ### `))
console.log(consolecolor("#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#FF0000", "#ff5e00")(`                                      Status : Not Connected | Error : Invalid Token`))
console.log(consolecolor("#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))

})

async function main() {

    console.clear()
console.log(consolecolor("#ff0000", "#ff6f00")(`
         ::::::::  :::::::::   ::::::::  :::    ::: :::::::::       :::        ::::::::   ::::::::  :::    ::: 
        :+:    :+: :+:    :+: :+:    :+: :+:    :+: :+:    :+:      :+:       :+:    :+: :+:    :+: :+:   :+:  
        +:+        +:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+      +:+       +:+    +:+ +:+        +:+  +:+   
        :#:        +#++:++#:  +#+    +:+ +#+    +:+ +#++:++#+       +#+       +#+    +:+ +#+        +#++:++    
        +#+   +#+# +#+    +#+ +#+    +#+ +#+    +#+ +#+             +#+       +#+    +#+ +#+        +#+  +#+   
        #+#    #+# #+#    #+# #+#    #+# #+#    #+# #+#             #+#       #+#    #+# #+#    #+# #+#   #+#  
         ########  ###    ###  ########   ########  ###             ########## ########   ########  ###    ### `))
console.log(consolecolor("#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#FF0000", "#ff5e00")(`                                     Status : Connected | Username : ${client.user.username}`))
console.log(consolecolor("#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00", "FF0000", "#ff5e00")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#FF0000", "#ff5e00")(`
                                                [1] Lock a group (no limit)
                                                [2] Lock a group (timeout)
                                                [3] Exit
`))

const e = q.question(consolecolor("#FF0000", "#ff5e00")("[?] : "))

if (e === "1"){
const id = q.question(consolecolor("#FF0000", "#ff5e00")("What's the id of the groupe ? : "))
if (!id){
    console.log(consolecolor("#FF0000", "#ff5e00")("Missclick ??"))
    await sleep(2000)
    main()
}
else{
      setInterval(async () => {
          request(`https://discord.com/api/v9/channels/${id}/recipients/${client.user.id}`, {
              "headers": {
                  "accept": "*/*",
                  "authorization": `${config.token}`,
              },
              "method": "PUT",
          }, (err, response, body) => {
          });
      }, 350);
    }
}
else if (e === "2"){
    const id = q.question(consolecolor("#FF0000", "#ff5e00")("What's the id of the groupe ? : "))
if (!id){
    console.log(consolecolor("#FF0000", "#ff5e00")("Missclick ??"))
    await sleep(2000)
    main()
}
const time = q.question(consolecolor("#FF0000", "#ff5e00")("When do I have to activate the group ? (minutes) : "))
if (!time){
    console.log(consolecolor("#FF0000", "#ff5e00")("Missclick ??"))
    await sleep(2000)
    main()
}
else{
    setInterval(async () => {
        request(`https://discord.com/api/v9/channels/${id}/recipients/${client.user.id}`, {
            "headers": {
                "accept": "*/*",
                "authorization": `${config.token}`,
            },
            "method": "PUT",
        }, (err, response, body) => {
        });
    }, 350);

    setTimeout(async () => {
       main()
    }, time * 60000);
}
}
else if (e === "3"){
    process.exit(1)
}
else{
    console.log(consolecolor("#FF0000", "#ff5e00")("Missclick ??"))
    await sleep(2000)
    main()
}
}

client.on('ready', async () => main())