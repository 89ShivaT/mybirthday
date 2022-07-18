// fetch("data.txt").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(`Data Not Funds ${error}`);
// })

const fistDiv =  document.querySelector(".data");
const secundDiv =  document.querySelector(".pro");
const fBtn =  document.querySelector("#fist");
const sBtn =  document.querySelector("chnage");
const demo =  document.querySelector("#demo");
const img =  document.querySelector("#pic");
const wiss =  document.querySelector("#bid");

fBtn.addEventListener("click",()=>{
    demo.innerHTML="Loadind......👱";
    fistDiv.style.background="black";
    fistDiv.style.color="white";
    img.style.display="block";
    wiss.innerText="Happy Birthday Shiva Thakur";
 setInterval(() => {
      
        const mybirthday =  new Date("March 14 2022, 00:00:00:00").toLocaleString();
        demo.innerHTML = `Your Birthday Is ${mybirthday}`; 
    }, 2000);

   

});

