var cont = 0;
var objeto = '';
var divNumero = document.querySelector('div.numero');
var btIncrementar = document.querySelector('#incrementar');
var btResetar = document.querySelector('#resetar');
var botaoInsere = document.querySelector('#insere');
var item = document.querySelector('div.item');
var contexto = document.querySelector('div.contexto');
var contador = document.querySelector('div.contador');
var form = document.querySelector('#formContexto');
document.addEventListener('deviceready', function () {
  console.debug('PRONTO: ' + device.platform);
  cont = parseInt(localStorage['cont'] || 0);
  debugger
  objeto = localStorage['item'];
  divNumero.textContent = cont;
  if (objeto != undefined) {
    item.innerText = objeto;
    contexto.style.display = 'none';
  }else{
    contexto.style.display = '';
    contador.style.display = 'none';
    document.getElementsByName('objeto')[0].focus();
  }
  btIncrementar.addEventListener('click', function () {
    cont++;
    localStorage['cont'] = cont;
    divNumero.textContent = cont;
    item.innerText = objeto;
  });
  btResetar.addEventListener('click', function () {
    cont = 0;
    localStorage.clear();
    divNumero.textContent = cont;
   document.getElementsByName('objeto')[0].value ='';
   document.getElementsByName('objeto')[0].focus();
    contador.style.display = 'none';
    contexto.style.display = '';
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    objeto = document.getElementsByName('objeto')[0].value;
    console.log(objeto);
    localStorage['item'] = objeto;
    item.innerText = objeto;
    contexto.style.display = 'none';
    contador.style.display = '';
  
  });
  
});
