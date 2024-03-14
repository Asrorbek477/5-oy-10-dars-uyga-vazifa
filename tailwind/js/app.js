const api =('https://jsonplaceholder.typicode.com/users');
const overlay =document.getElementById("overlay");
const temlate =document.querySelector("template");
const userslist =document.querySelector("#users-list");


function getData(){
  const request =new XMLHttpRequest(); 
  return new Promise((resolve,reject)=>{
  request.addEventListener('readystatechange',() =>{
      if(request.readyState !==4){
        overlay.classList.remove("hidden");
      } else if(request.readyState ==4 && request.status ==200){
          overlay.classList.add("hidden");
          const data =JSON.parse(request.responseText); 
          resolve(data);
      }else if(request.readyState==4){
        reject("Error occurod");
      }
    });
    request.open("GET",api); 
    request.send(); 
});

}

getData()
.then((data) =>updateUI(data))
.catch((error)=>console.log(error));


function updateUI(users){

  users.forEach((user) => {
  const clone =temlate.content.cloneNode(true);

  const website =clone.querySelector(".website");
  const phone =clone.querySelector(".phone");
  const username =clone.querySelector(".username");

  username.textContent=user.username;
  phone.textContent =user.phone;
  website.textContent =user.website;

  username.style.color ='red';
  website.style.color='red';
  phone.style.color ='blue';

  userslist.appendChild(clone);

  });
}

// let printerState =true;

// function printText(){
//   return new Promise((resolve,reject)=>{
//     if(printerState){
//       resolve("Print Some Papers");
//     }else{
//       reject("Error occured:(");
//     }
//   });
// }


// printText()
// .then((data)=>console.log(data))
// .catch((error) => console.log(error));