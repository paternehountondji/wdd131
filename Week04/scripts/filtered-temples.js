const temples = [

{
templeName:"Aba Nigeria",
location:"Aba, Nigeria",
dedicated:"2005, August, 7",
area:11500,
imageUrl:"images/aba.webp"
},

{
templeName:"Manti Utah",
location:"Manti, Utah, United States",
dedicated:"1888, May, 21",
area:74792,
imageUrl:"images/manti.webp"
},

{
templeName:"Payson Utah",
location:"Payson, Utah, United States",
dedicated:"2015, June, 7",
area:96630,
imageUrl:"images/payson.webp"
},

{
templeName:"Yigo Guam",
location:"Yigo, Guam",
dedicated:"2020, May, 2",
area:6861,
imageUrl:"images/yigo.webp"
},

{
templeName:"Washington D.C.",
location:"Kensington, Maryland, United States",
dedicated:"1974, November, 19",
area:156558,
imageUrl:"images/washington.webp"
},

{
templeName:"Lima Perú",
location:"Lima, Perú",
dedicated:"1986, January, 10",
area:9600,
imageUrl:"images/lima.webp"
},

{
templeName:"Mexico City Mexico",
location:"Mexico City, Mexico",
dedicated:"1983, December, 2",
area:116642,
imageUrl:"images/mexico.webp"
},

{
templeName:"Rome Italy",
location:"Rome, Italy",
dedicated:"2019, March, 10",
area:41010,
imageUrl:"images/rome.webp"
},

{
templeName:"Paris France",
location:"Paris, France",
dedicated:"2017, May, 21",
area:44000,
imageUrl:"images/paris.webp"
},

{
templeName:"Accra Ghana",
location:"Accra, Ghana",
dedicated:"2004, January, 11",
area:17500,
imageUrl:"images/accra.webp"
}

];

const cards=document.querySelector("#cards");

function displayTemples(list){

cards.innerHTML="";

list.forEach((temple)=>{

const card=document.createElement("section");

card.innerHTML=`

<h2>${temple.templeName}</h2>

<p><strong>Location:</strong> ${temple.location}</p>

<p><strong>Dedicated:</strong> ${temple.dedicated}</p>

<p><strong>Area:</strong> ${temple.area} sq ft</p>

<img src="${temple.imageUrl}"
alt="${temple.templeName}"
loading="lazy">

`;

cards.appendChild(card);

});

}

displayTemples(temples);

document.querySelector("#home").addEventListener("click",()=>{

displayTemples(temples);

});

document.querySelector("#old").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>Number(t.dedicated.substring(0,4))<1900)

);

});

document.querySelector("#new").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>Number(t.dedicated.substring(0,4))>2000)

);

});

document.querySelector("#large").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>t.area>90000)

);

});

document.querySelector("#small").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>t.area<10000)

);

});

document.querySelector("#year").textContent=new Date().getFullYear();

document.querySelector("#lastModified").textContent=document.lastModified;