
// textContent

const title =document.getElementById('title');
title.textContent +=' New text';

const  listItem =document.querySelectorAll('.list-item');

listItem.forEach((item)=>{
 item.textContent +=' darslari';
});

// innerHTML

// const title =document.getElementById('title');
// title.innerHTML ='<i>new Text HTMl</i>';


const names =['Ahror','Samandar','Abdulloh'];
const ol =document.querySelector('ol');

names.forEach((name)=>{
  ol.innerHTML +=`<li>${name}</li>` ;
});