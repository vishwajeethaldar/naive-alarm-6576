
import navbar from "../components/pnavbar.js";
document.getElementById("mains").innerHTML=navbar();

// import footer from "../components/footerpart.js";
// document.getElementById("footer").innerHTML=footer();



// let showHideFeatures= ()=>{
//     let div = document.getElementById('planFetures')
//     let x= div.getAttribute("class");

//     if(x=='hide'){
//         div.removeAttribute('class', 'hide')
//     }else{
//         div.setAttribute('class', 'hide')
//     }

//     console.log(div);
// }
// document.getElementById('showHideFeatures').addEventListener('click', showHideFeatures);






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

// document.getElementById('q5').addEventListener('click', ()=>{
//     showhideFaqs('a5');
// });

// document.getElementById('q6').addEventListener('click', ()=>{
//     showhideFaqs('a6');
// });

// document.getElementById('q7').addEventListener('click', ()=>{
//     showhideFaqs('a7');
// });

// document.getElementById('q8').addEventListener('click', ()=>{
//     showhideFaqs('a8');
// });

// document.getElementById('q9').addEventListener('click', ()=>{
//     showhideFaqs('a9');
// });



document.getElementById("btnforfree1").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})