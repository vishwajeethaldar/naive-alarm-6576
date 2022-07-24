import navbar from "../components/pnavbar.js";
document.getElementById("mains").innerHTML=navbar();

import footer from "../components/footerpart.js";
document.getElementById("footer").innerHTML=footer();
function clicked1() {
    if (img1 == 1) {
      document.getElementById("img1").style.display = "inline";
      return (img1 = 0);
    } else {
      document.getElementById("img1").style.display = "none";
      return (img1 = 1);
    }
  }




  let showhideFaqs = (id)=>{
    let ids = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9'];
    let andiv = document.getElementById(id)
    let ansDivClass  = andiv.getAttribute('class');
   if(ansDivClass=='hide'){
        andiv.removeAttribute('class', 'hide');
        andiv.setAttribute('class', 'answer');
   }else{
        andiv.removeAttribute('class', 'answer');
        andiv.setAttribute('class', 'hide');
   }
}

document.getElementById('Q1').addEventListener('click', ()=>{
    showhideFaqs('A1');
});

document.getElementById('Q2').addEventListener('click', ()=>{
    showhideFaqs('A2');
});

document.getElementById('Q3').addEventListener('click', ()=>{
    showhideFaqs('A3');
});

document.getElementById('Q4').addEventListener('click', ()=>{
    showhideFaqs('A4');
});