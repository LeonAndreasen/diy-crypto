const secretMessage = "ATTACKATSEVEN"

//console.log(secretMessage.charCodeAt(0))
//console.log(secretMessage[i], charCode, charCode + 1)}

//översätt till nummer
const charCodes = []
for (let i = 0; i < secretMessage.length; i++) {    
charCodes.push(secretMessage[i].charCodeAt(0))
}
//shifta numret
for (let i = 0; i < charCodes.length; i++) {
charCodes[i] = charCodes[i] + 1
}


console.log(charCodes)

let encryptedmessage = ""
//översätt tillbaka från charcode
for (let i = 0; i < charCodes.length; i++) {
encryptedmessage = encryptedmessage + String.fromCharCode(charCodes[i])    
}
console.log(encryptedmessage)

function ceasarEncrypt(message,shift){

}

function ceasarDecrypt(encryptedmessage,shift){

}
