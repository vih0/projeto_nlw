
function Onscroll(){
    if(scrollY > 0){
    navigation.classList.add('scroll')
}else{
    navigation.classList.remove('scroll')
}
    
} 
function showMenu(){
    let menu = document.querySelector('#menu');
    if(menu.classList.contains('menu-hide')){
       menu.classList.remove('menu-hide') 
       menu.classList.add('menu-show')
    }else{
        menu.classList.remove('menu-show') 
        menu.classList.add('menu-hide')
      
    }
}
const formulario = document.getElementById('formulario')
const nome = document.getElementById('name')
const email = document.getElementById('email')

formulario.addEventListener('submit', () => {
    e.preventDefault()
    checkInput()
})
function checkInput() {
    const nomeValue=nome.value.trim() 
    const emailValue=email.value .trim()
}
if(nome === ''){

    errorValidation(nome, 'Insira seu nome')
}

function errorValidation(input, message){
    const formControl = input.parentElement;
}