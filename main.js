function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado");
  }
}

/* document.querySelector('.tecla_pom').onclick = tocaSom; */
// const = constante
// let = variavel
//While significa enquanto.
//lenght = Length em inglês significa tamanho, o comprimento dessa lista que guarda o número 9.
//for = para
// contador = contador + 1; (é a mesma coisa que) contador ++
// == (ele vai comparar apenas valores)
// === ( o operador de três iguais ele vai comprar não só o valor, mas também o tipo do dado)
// o || significa or
// o != siginifica diferente
// && significa and (e)
// else significa se nao

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  // template string
  const idAudio = `#som_${instrumento}`;
  //console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code === "space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
