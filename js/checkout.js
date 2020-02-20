let inputCPF = document.getElementById("cpf");
let inputSenha = document.getElementById("senha");
let inputCEP = document.getElementById("cep");
let inputConfirmar= document.getElementById("confirmeSenha");
let inputCartao = document.getElementById("numeroCartao");
let inputBairro = document.getElementById("bairro");
let inputEndereco = document.getElementById("endereco");
let inputCidade = document.getElementById("cidade");

//const API_KEY="373fa44e4b5a4672b98f5810fe8c18cf";

let config= {
    method: "GET"
}




inputCPF.addEventListener("keyup", (event) => {
    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length-1));

    }

    if (inputCPF.value.length>=11) {
        inputCPF.value = inputCPF.value.substring(0,11);
    }
})


inputSenha.addEventListener("keyup",(e)=>{
   if (inputConfirmar.value == inputSenha.value){
     // inputSenha.setAttribute('class', 'form-control is-valid')
    //  inputSenha.style.border = "1px solid green";

      inputConfirmar.setAttribute('class', 'form-control is-invalid')
      inputConfirmar.style.border = "1px solid green";
      
   }else{
      // inputSenha.setAttribute('class', 'form-control is-invalid')
      // inputSenha.style.border = "1px solid ";

      // inputConfirmar.setAttribute('class', 'form-control is-valid')
       inputConfirmar.style.border = "1px solid green";
   }

})

inputCEP.addEventListener("keyup", (event) => {
    if (isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length-1))
        
    }

    if (inputCEP.value.length>=8) {
        inputCEP.value = inputCPF.value.substring(0,8)
        buscarCEP(inputCEP);
    }

/*    let consu =fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + 
API_KEY, config)

.then((consu)=>{
    //retornando a promessa do json
   return consu.json()
})
.then((json)=>{
    //articles é um atributo de um array
    api(json.articles)

})

console.log(consu)
function mostrarNaTela (locali){

    locali.forEach((noticia) => {
        
 let cep= ${cep.urlToImage}

consu.insertAdjacentHTML('beforeend', cep)
})
    }
*/

})

inputCartao.addEventListener("keyup", ()=>{
    if (isNaN(inputCartao.value.length) == 12){
       inputCartao.setAttribute('class', 'form-control is valid');
       inputCartao.style.color= "red";
    }else{
        inputCartao.setAttribute('class', 'form-control is invalid');
    }
})


function buscarCEP(cep){
    fetch('https://viacep.com.br/ws/$(cep)/jason/')
    .then (response => response.json())
    .then(dados =>){
        if(dados.erro){
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }else{
            inputCEP.setAttribute('class', 'form-control is-valid')
            inputEndereco.value = dados.logradouro;
            inputBairro.value= dados.bairro;
            inputCidade.value = dados.localidade;

        }
    }
}






