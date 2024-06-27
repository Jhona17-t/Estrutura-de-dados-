const carro = {marca : "cevrolet",
     modelo : 1999, 
     ano:2000,
    cor : "preto claro", }
    console.log(carro.modelo)
    console.log(carro.cor)
    delete carro.cor
    carro.cor = "jacinto"
    carro.condição = "novo"
    delete carro.ano
    console.log(carro)