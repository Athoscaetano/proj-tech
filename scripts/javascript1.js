function valid(){
var nome =document.getElementById("nome");
var sobrenome = document.getElementById("sobrenome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var celular=document.getElementById("celular");
var cpf = document.getElementById("cpf");
var rg = document.getElementById("rg");
var date = document.getElementById ("date");
var cep = document.getElementById("cep");
var rua = document.getElementById("rua");
var numero=document.getElementById("numero");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado=document.getElementById("estado");
var genero = document.getElementById("genero");
if (nome.value == ""){
    alert("campo vazio. Por favor, preencha seu nome");
    nome.focus();
    return;
}
if (sobrenome.value == ""){
    alert("Campo vazio. Por favor, preencha seu sobrenome");
    sobrenome.focus();
    return;
}
if(email.value == ""){
    alert("campo vazio. Por favor, preencha seu email");
    email.focus();
    return;
}
if(telefone.value == ""){
    alert("Campo vazio. Por favor, preencha seu telefone");
telefone.focus();
return;
}
if(celular.value == "" ){
    alert("Campo vazio. Por favor, digite seu celular");
    celular.focus();
    return;
}
if(cpf.value == ""){
    alert("Campo Vazio. Por favor, preencha seu cpf");
    cpf.focus();
    return;
}
if(rg.value == ""){
    alert("Campo Vazio. Por favor, preencha seu rg");
    rg.focus();
    return;
}
if(Date.value == ""){
    alert("Campo Vazio. Por favor, indique sua data de nascimento");
    Date.focus();
    return;
}
if(cep.value == ""){
    alert("Campo Vazio. Por favor, preencha seu cep");
    cep.focus ();
    return;
}
if(rua.value == ""){
    alert("campo vazio. Por favor, prencha o nome de sua rua");
    rua.focus();
    return;
}
if(numero.value == ""){
    alert("campo vazio. Por favor, ensira seu número");
    numero.focus();
    return;
}
if(bairro.value == ""){
    alert("campo vazio. Por favor, ensira seu bairro");
    bairro.focus();
    return;
}
if(cidade.value == ""){
    alert("campo vazio. Por favor, ensira sua cidade");
    cidade.focus();
    return;
}
if(estado.value == ""){
    alert("campo vazio. Por favor, ensira seu estado");
    estado.focus();
    return;
}
if(genero.value == ""){
    alert("Por favor, indique seu gênero");
    genero.focus();
    return;
}   
    alert("formulário enviado! obrigado por participar do nosso projeto");
}
    //formulario.submit();