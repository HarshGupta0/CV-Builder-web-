// alert("lolll");
function addNewWeFeild(){
let newNode = document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weFeild');
newNode.setAttribute("rows",3);
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder"," Explain Your Experience");
let weAddButtonOb= document.getElementById('weAddButton');
let weOb=document.getElementById('we');
weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAqFeild(){
let newNode = document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('aqFeild');
newNode.setAttribute("rows",3);
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Add More Qualification");
let weAddButtonOb= document.getElementById('aqAddButton');
let weOb=document.getElementById('aq');
weOb.insertBefore(newNode,weAddButtonOb);
}

//generating cv
function generateCV(){
    //name feild
let nameFeild=document.getElementById("namefeild").value;
let nameT=document.getElementById('nameT');
nameT.innerHTML=nameFeild;
document.getElementById("nameT2").innerHTML=nameFeild;
    //email feild
let emailFeild=document.getElementById("emailfeild").value;
let emailT=document.getElementById('emailT');
emailT.innerHTML=emailFeild;
    //number feild
let numberFeild=document.getElementById("contactfeild").value;
let numberT=document.getElementById('numberT');
numberT.innerHTML=numberFeild;
// address feild
document.getElementById("addressT").innerHTML=document.getElementById("addressfeild").value;
//objective 
document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefeild").value;
// links
document.getElementById("gitHubT").innerHTML = document.getElementById("GitHubfeild").value;
document.getElementById("linkedInT").innerHTML = document.getElementById("linkedInfeild").value;
document.getElementById("instagramT").innerHTML = document.getElementById("Instafeild").value;
//for we feild
let wes=document.getElementsByClassName('weFeild');
let str ='';
for( let e of wes){
    str=str + `<li>${e.value}</li>`;
}
document.getElementById("weT").innerHTML=str;
//for academic Qualification
let aqs=document.getElementsByClassName('aqFeild');
let str2 ='';
for( let e of aqs){
    str=str + `<li>${e.value}</li>`;
}
document.getElementById("aqT").innerHTML=str;


//finally showing the template
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function printCV(){
    window.print();
}
