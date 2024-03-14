/* ---------------- dom selectors ----------*/


// 1) getElementsByTagName 

// const listItem =document.getElementsByTagName('li');
// console.log(listItem.length);'
// listItem.forEach((li)=> {
//     console.log(li);
// });

//  2) getElementsByClassNmae

// const listItem =document.getElementsByClassName('list-item');
// console.log(listItem[0]);

//  3) getElementsById

const clickBtn =document.getElementById('click-btn');
console.log(clickBtn);

//  4) querSelector / querySelectorAll/

const listItem  =document.querySelectorAll('#title');
console.log(listItem);

listItem.forEach((item)=>{
   console.log(item);
});