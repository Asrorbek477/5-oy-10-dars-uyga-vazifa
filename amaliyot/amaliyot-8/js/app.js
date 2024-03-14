 const ul =document.querySelector('ul');
// ul.remove();


const button =document.querySelector('button');

button.addEventListener('click',()=>{
//    ul.innerHTMl +='<li>Something new text</li>'

// js da element yaratish

const  li =document.createElement('li');
li.textContent ='Something new text'; 
 ul.prepend(li);
});




const items =document.querySelectorAll('li');

items.forEach((item)=>{
   item.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.item);

    // e.target.style.textDecotation ='line-through';
    // e.target.style.opacity ='0.8';

    e.target.remove();
   });
});