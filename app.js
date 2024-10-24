// let add=document.querySelectorAll("button");
// console.dir(add);
// // add.onclick=function(){
// //   alert("yes button is click");
// // }
// function shyhello(){
//   alert("hello");
// }
// function shyname(){
//   alert("manvendra");
// }
// for(btn of add){
// // btn.onclick=shyhello;
// // btn.onclick=shyname;
// // btn.onmouseenter=function(){
// //   console.log("you entered a button");
// // };
// // btn.addEventListener("click" ,shyhello);
// // btn.addEventListener("click" ,shyname);
// btn.addEventListener("dblclick" ,function(){
//   console.log("lick here");
// });
// }
//  let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//   let h3=document.querySelector("h3");
//   let ranndomcolon=getrandomcolor();
//   h3.innerText=ranndomcolon;
//   let div = document.querySelector("div");
//   div.style.Color=ranndomcolon;
//   console.log("color updated");
// });
// function getrandomcolor(){
//   let red=Math.floor(Math.random()*255);
//   let green=Math.floor(Math.random()*255);
//   let blue=Math.floor(Math.random()*255);
//   let color=`(${red},${green},${blue})`;
//   return color;
// }
// let p= document.querySelector("p");
// p.addEventListener("click",function(){
//   console.log("para was click");
// });
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//   console.log("mouse inside box");
// });
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// let btn=document.querySelector("button");
// function color(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// }

// h1.addEventListener("click", color);
// h3.addEventListener("click",color);
// p.addEventListener("click",color);
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(){
//   console.log("pess");
// });
// inp.addEventListener("keydown",function(event){
//   console.log("code=",event.code);
//   if(event.code=="KeyA")
//   {
//     console.log("moveup");
//   }
//   else if(event.code=="KeyB"){
//     console.log("movedown");
//   }
// });
// let fr=document.querySelector("form");
// fr.addEventListener("submit",function(event){
//   event.preventDefault();
//   let pass=document.querySelector("pass");
//   alert("form summited");
// });
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
// event.preventDefault();
// let pass=document.querySelector(".pass");
// let username=document.querySelector(".username");
// console.log(username.value);
// console.log(pass.value)
// alert(`hii ${username.value} your password is${pass.value}`);
// });
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
// event.preventDefault();
// let pass=this.elements[0];
// let username=this.elements[1];
// console.log(username.value);
// console.log(pass.value)
// alert(`hii ${username.value} your password is${pass.value}`);
// });
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelectorAll("li");
// div.addEventListener("click",function(){
//   console.log("div was click");
// });
// ul.addEventListener("click",function(){
//   console.log("ul was click");
// });
// for(lis of li){
// lis.addEventListener("click",function(event){
//   event.stopPropagation();
//   console.log("li was click");
// });
// }

//this code for todo app
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function(){
//   let lii=document.createElement("li");
//   lii.innerText=inp.value;
//   let delbtn=document.createElement("button");
//   delbtn.innerText="delete";
//   delbtn.classList.add("delete");
//   lii.appendChild(delbtn);
//   ul.appendChild(lii);
//   inp.value="";

// });
// ul.addEventListener("click",function(event){
//   if (event.target.nodeName==="BUTTON"){
//     let listitem= event.target.parentElement;
//     console.log(listitem);
//     listitem.remove();
//     console.log("clicked");
//   }
// });

//exta code
// let btnde=document.querySelectorAll(".delete");
// for(brnds of btnde){
//     brnds.addEventListener("click",function(){
//     let ver=this.parentElement;
//     console.log(ver);
//     ver.remove();
//   });
// }
// let gamesq=[];
// let usersq=[];
// let btnco=["yellow","red","green","blue"];
// let start=false;
// let level= 0;
// let h3=document.querySelector("h3");
// document.addEventListener("keypress",function(){
//   if (start==false){
//     console.log("game is started");
//     start=true; 
//     levelupp();
//   }
// });
// function gameflash(btn){
//  btn.classList.add("flash");
//  setTimeout(function(){
//  btn.classList.remove("flash");
//  },250);
// }
// //when user press
// function userflash(btn){
//   btn.classList.add("userflash");
//   setTimeout(function(){
//   btn.classList.remove("userflash");
//   },250);
//  }

// function levelupp(){
//   usersq=[];
//   level++;
//   h3.innerText=`Level ${level}`;
// let rand=Math.floor(Math.random()*4);
// let randco=btnco[rand];
// let ranbtn=document.querySelector(`.${randco}`);
// gamesq.push(ranbtn);
// console.log(gamesq);
// // console.log(rand);
// // console.log(randco);
// // console.log(ranbtn);
// gameflash(ranbtn);
// }

// //check game
// function checkans(idx){
//   // let idx= level-1;
//   // console.log(level);
//   if (usersq[idx]===gamesq[idx].getAttribute("id")){   
//     if(usersq.length==gamesq.length){
//       setTimeout(levelupp, 1000);
//      }
// } else {
//     h3.innerHTML=`Game over!your score was <b>${level}</b><br>:press any other key to start.`;
//     document.querySelector("body").style.backgroundColor ="red";
//     setTimeout(function (){
//       document.querySelector("body").style.backgroundColor= "white";
//     },150);
//     reset();
// }
// }
// function btnpress(){
//   let btn=this;
//   userflash(btn);
//   usercolor= btn.getAttribute("id");
//   usersq.push(usercolor);
//   checkans(usersq.length-1);
// }
// let btns= document.querySelectorAll(".btn");
// for(bt of btns){
// bt.addEventListener("click",btnpress);
// }
// function reset(){
//   start=false;
//   gamesq=[];
//   usersq=[];
//   level=0;
// }
// function one(){
//   return 1;
// }
// function two(){
//   return one();
// }
// function three(){
//   return two()+one(); 
// }
// three();
// let h1=document.querySelector("h1");
// function changecolor( color,dely,nextchangecolor){
//   setTimeout(()=>{
//     h1.style.color=color;
//     nextchangecolor();
//   },dely);
// }
// changecolor("green",1000,()=>{
//   changecolor("blue",1000,()=>{
//     changecolor("red",1000);
//   });
// });
// function savedeta(data,sucses,failure){
//   let ran=Math.floor(Math.random()*10)+1;
//   if (ran>4)
//  sucses();
// else{
//  failure();
// }
// }
// savedeta("manvendra",()=>{
//   console.log("succes1:data was save");
//   savedeta("patel",()=>{
//     console.log("succes2:data was save");
//   },()=>{
//     console.log("failure2:data  not save")
//   })
// },()=>{
//   console.log("failure1:data was not save");
// });
// function svadata(data){
//   return new Promise((resolve,reject)=>{
//   let internetspeed=Math.floor(Math.random()*10)+1;
//   if(internetspeed>4){
//     resolve("heigh internetspeed");
//   }
//   else{
//     reject("slow");
//   }
//   });
// }
// svadata("manvendra");
//  async function add() {
//   return "manvendra";
//  }
//  add()
//  .then((result)=>{
//   console.log("promise was sucssesful");
//   console.log("this is result:",result);
//  })
// .catch((err)=>{
//   console.log("promise was rejected:",err);
// })
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let fact= await getFact();
//   console.log(fact);
//   let p=document.querySelector("#result");
//   p.innerText=fact;
// });

// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let link= await getImage();
//   // console.log(link);
//   let img=document.querySelector("#result");
//    img.setAttribute("src",link);
// });

// let url= "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//   try {
//     let res= await axios.get(url);
//      return res.data.message;
//   }catch (e){
//  console.log("this is error:-",e);
//  return "no fact return";
//   }
// }

// let url= "https://catfact.ninja/fact";
// async function getFact(){
//   try {
//     let res= await axios.get(url);
//      return res.data.fact;
//   }catch (e){
//  console.log("this is error:-",e);
//  return "no fact return";
//   }
// }
// let url=" http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//  let input=document.querySelector("input").value;
//  console.log(input);
//  let value= await getColleges(input);
//  show(value);
// });
//  function show(value){
//   let list=document.querySelector("#list");
//   list.innerText="";
//   for(val of value){
//  console.log(val.name);
//  let li =document.createElement("li");
//  li.innerText=val.name;
//  list.appendChild(li);
//   }
//  }
// async function getColleges(country) {
//   try{
//   let res=await axios.get(url+country);
//   return res.data;
// }catch(e){
//   console.log("error :",e);
//   return[];
// }
// }