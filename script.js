const items = document.querySelectorAll('.item');
const accordionDiv = document.querySelector('.accordion');
const span = document.querySelectorAll('.span');



accordionDiv.addEventListener('click', accordion);

function accordion(e){
    let check = e.target.classList.contains('icon');
    let allElement = ['number', 'icon', 'text', 'item', 'span'];
    let check2 = allElement.find(el => el.includes(e.target.className));

    if(!check && !check2) return -1;

    let parent = e.target.closest('.item');

    

    if(parent.classList.contains('open')){
        
        parent.classList.remove('open');
        parent.querySelector('.span').innerHTML =`
        <svg data-class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
        `
        return -1;
    }
    items.forEach(el => el.classList.remove('open'));
    span.forEach(el => el.innerHTML = `
    <svg data-class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
    `)
    parent.classList.add('open');
    parent.querySelector('.span').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
  
    `;
    
}