/* 


variaveis - uum espaçp de memorio que vc reserva e pode 
guardar o que quiser la dentro.

3 jeito de criar variaveis
 - var /jeito antigo, não é mais usado.
 - let / jeito novo, mais usado - vc pode alterar o valor dela.
 - const / consntante - vc não pode alterar o valor dela, ela é fixa. 


 funçoes - é um bloco de codigo que vc pode chamar quantas vezes quiser 
 um trecho de codigo que , so e executado,quando vc chamado.


 */

const form = document.querySelector (".formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
}
