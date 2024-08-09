const buttons = document.querySelectorAll('button');
const gallery = document.querySelectorAll('img');

buttons.forEach((button)=>{
button.addEventListener( 'click',()=>{

    for(let img of gallery){
        img.style.display='none';

        const images = img.getAttribute('data-filter')
        if (button.textContent === images || button.textContent === 'All' ){
            img.style.display='block';
            img.classList.add('show');
        }else{
            img.classList.remove('hide');
        }
    }
})
})