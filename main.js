
//console.log(secretMessage.charCodeAt(0))
//console.log(secretMessage[i], charCode, charCode + 1)}




function caesarEncrypt(message,shift){
    //översätt tecken till nummer
    const charCodes = []
    for (let i = 0; i < message.length; i++) {    
        charCodes.push(message[i].charCodeAt(0))
        }
        //shifta numret
        for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
        }
        
        let result = ""
        //översätt tillbaka från charcode
        for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])    
        }
        return result
}
const secretMessage = "Hellofriends"
const encryptedmessage = caesarEncrypt(secretMessage, 2)
console.log(secretMessage, encryptedmessage)

function caesarDecrypt(encryptedmessage,shift){
    const charCodes = []
    for (let i = 0; i < encryptedmessage.length; i++) {
        charCodes.push(encryptedmessage[i].charCodeAt(0))
        
    }
for (let i = 0; i < charCodes.length; i++) {
    charCodes[i] = charCodes[i] - shift
    
}            
let result = ""
//översätt tillbaka från charcode
for (let i = 0; i < charCodes.length; i++) {
result = result + String.fromCharCode(charCodes[i])    
}
return result
        }
        const decryptedmessage = caesarDecrypt(encryptedmessage, 2)
console.log(secretMessage, decryptedmessage)
//const decryptedmessage = caesarDecrypt()
//console.log(encryptedmessage, decryptedmessage)