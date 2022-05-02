function guardar(){
  var nome = document.getElementById('nome').value;
  var urL = document.getElementById('urL').value;
  var desc = document.getElementById('desc').value

  const myObjt = {
    nome: nome,
    urL: urL,
    desc: desc

  }

  var valores = localStorage.getItem("Produtos"); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  if (!valores){
    valores = [ ]
  }

  valores.push(myObjt);
  localStorage.setItem("Produtos", JSON.stringify(valores));
}


