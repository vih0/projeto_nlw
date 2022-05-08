
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