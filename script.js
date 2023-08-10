function analize(){
  let num = document.getElementById("numero")  
  let tab = document.getElementById("selectnum")

  
  //condição para não deixar o imput vazio
  if (num.value == 0 || num.value > 100){
    alert("Digite um valor válido")

  }else{
    let listaN = []
    listaN.push(num.value)
    console.log(listaN)
    
   /* 
    for(let i=1; i<=10; i++ ){  // Estrutura de reptição para mostrar a tabuada
      
        let item = document.createElement("p")
        item.innerText = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        

    } */
  }
}
