let men=document.querySelector('.men')
let likebtn=document.getElementById('like')

men.addEventListener('click', function enterMen(enter){
    if (men.innerHTML = enter) {
        location.href="Men.html"
    }
})

function toggleMenu() {
    let list = document.querySelector('.list')
    list.classList.toggle("toggle-menu")
}

likebtn.addEventListener('click',()=>{
 let new_color='black'
 like.style.Color=new_color
// nav.style.backgroundColor=colors
})
//  localStorage.setItem('backgroundColor',new_color)