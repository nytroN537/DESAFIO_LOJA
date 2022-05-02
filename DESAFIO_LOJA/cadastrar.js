function guardar(){
  var nome = document.getElementById('nome').value;
  var urL = document.getElementById('urL').value;
  var desc = document.getElementById('desc').value

  const myObjt = {
    nome: nome,
    urL: urL,
    desc: desc

  }

  window.localStorage.setItem("Produtos", JSON.stringify(myObjt));
  localStorage.setItem(Produtos);
}

