// getAttribute
const link =document.querySelector('a');
console.log(link.getAttribute('href'));

// setAttribute
link.setAttribute('href','https://www.yandex.ru');
link.textContent ='Go To YAndex Main Page';



const text =document.querySelector('p');
console.log(text.getAttribute('class'));
text.setAttribute('class','success');

