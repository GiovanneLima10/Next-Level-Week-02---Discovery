// procurar o botão 
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('ciick', cloneField)
//quando clicar no botao

//executar uma acao
function cloneField() {
     //duplicar os campos. que campo ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean: true or false

    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpara
    fields.forEach(function(field) {
        //pegar p field do momento e limpa ele: campos
         fields.value = ""
    })

   // colocar na pagina, onde na pagina ?
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   