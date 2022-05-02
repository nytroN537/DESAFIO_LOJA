
function mostraValores() {
    var valores = localStorage.getItem("Produtos"); // pega os valores como string no localstorage
    valores = JSON.parse(valores); // converte a string em array
  
    valores.forEach((valor) => { // para cara registro no array executa o processo abaixo
      const divCard = document.createElement('div'); // cria uma div
      divCard.className = 'card-col'; // insere a classe do bootstrap
      divCard.setAttribute('style', 'width: 18rem; display: inline-block; justify-content: center; align-items: center; text-align:');
  
      const divCardBody = document.createElement('div');
      divCardBody.className = 'card-body';
      
      const h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.innerHTML = valor.nome; // adiciona o conteudo entre a abertura e fechamento da tag

      const img = document.createElement('img');
      img.setAttribute('src', valor.urL);
      img.setAttribute('style', 'max-height: 200px; max-width: 200px; justify-content: center; align-items: center; text-align: center; margin-top: 25px; display: flex; margin-left: 6vh' ); // seta alguns estilos direto na tag
  
  
      const p = document.createElement('p');
      p.className = 'card-text';
      p.innerHTML = valor.desc;
      
      divCardBody.appendChild(h5);
      divCard.appendChild(img); // insere a img dentro da divCard
      divCard.appendChild(divCardBody);
      divCardBody.appendChild(p);
  
      const grid = document.getElementById('grid');
      grid.appendChild(divCard); // adiciona a divCard dentro do grid
    });
  }

  