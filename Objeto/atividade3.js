const prompt = require("prompt-sync")();
const arr= []
for (let i = 0; i < 5;i++){
    let usuario=(String(prompt("Digite seu nome")))
    let obj={ id:1 + i,
            nome :usuario, }
    arr.push(obj)        
}console.log(arr)
