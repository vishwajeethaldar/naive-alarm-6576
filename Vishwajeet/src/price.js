import priceNote from '../components/priceNote.js'
import {singupcontent} from '../components/signup.js'
import {enterPassword} from '../components/signup.js'
import navbar from '../components/navbar.js';
document.getElementById('pricingnote').innerHTML = priceNote();

document.getElementById('mains').innerHTML = navbar();

import footer from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();


let changeSelected =(item)=>{
    let links  = document.querySelectorAll("#links>a");
    links.forEach((el) => {
        if(el.id==item.id){
            el.setAttribute('class', 'selected') 
        }else{
            el.removeAttribute('class', 'selected')  
        }
    });

    if(item.id=='plans'){
        document.getElementById('plansDetails').removeAttribute('class', 'hide');
        document.getElementById('marketingTerms').setAttribute('class', 'hide');
        document.getElementById('professionalServices').setAttribute('class', 'hide');
        document.getElementById('showHideFeatures').removeAttribute('class', 'hide');
        document.getElementById('planFetures').removeAttribute('class', 'hide');
        document.getElementById('compareplans').removeAttribute('class', 'hide');
    }else if(item.id=='marketing'){
        document.getElementById('plansDetails').setAttribute('class', 'hide');
        document.getElementById('marketingTerms').removeAttribute('class', 'hide');
        document.getElementById('professionalServices').setAttribute('class', 'hide');
        document.getElementById('showHideFeatures').setAttribute('class', 'hide');
        document.getElementById('planFetures').setAttribute('class', 'hide');
        document.getElementById('compareplans').setAttribute('class', 'hide');
    }else if(item.id=='teams'){
        document.getElementById('plansDetails').setAttribute('class', 'hide');
        document.getElementById('marketingTerms').setAttribute('class', 'hide');
        document.getElementById('professionalServices').removeAttribute('class', 'hide');
        document.getElementById('showHideFeatures').setAttribute('class', 'hide');
        document.getElementById('planFetures').setAttribute('class', 'hide');
        document.getElementById('compareplans').setAttribute('class', 'hide');
    }
}

let links  = document.querySelectorAll("#links>a");
console.log(links);
links.forEach((el) => {
    el.addEventListener('click', ()=>{
       el.setAttribute('class', 'selected')
       changeSelected(el);
    })
});


let changePlans = (idname)=>{

    
   
    
    
    
    let plan  = document.getElementById("plans");
    let market = document.getElementById("marketing");
    let teams  = document.getElementById("teams");
        if(idname=='plans'){
            market.removeAttribute("class", 'selected');
            teams.removeAttribute("class", 'selected');
            plan.setAttribute("class", 'selected');
            console.log('here')
        }else if (idname==market){
            market.setAttribute("class", 'selected');
            teams.removeAttribute("class", 'selected');
            plan.removeAttribute("class", 'selected');
        }else if(idname==teams){
            market.removeAttribute("class", 'selected');
            teams.setAttribute("class", 'selected');
            plan.removeAttribute("class", 'selected');
        }

}


let appenPlans = ()=>{
    document.getElementById('plansDetails');
}



let showHideFeatures= ()=>{
    let div = document.getElementById('planFetures')
    let x= div.getAttribute("class");

    if(x=='hide'){
        div.removeAttribute('class', 'hide')
    }else{
        div.setAttribute('class', 'hide')
    }

    console.log(div);
}
document.getElementById('showHideFeatures').addEventListener('click', showHideFeatures);













let showhideFaqs = (id)=>{
    // let ids = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9'];
  
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



document.getElementById('q1').addEventListener('click', ()=>{
    showhideFaqs('a1');
});

document.getElementById('q2').addEventListener('click', ()=>{
    showhideFaqs('a2');
});

document.getElementById('q3').addEventListener('click', ()=>{
    showhideFaqs('a3');
});

document.getElementById('q4').addEventListener('click', ()=>{
    showhideFaqs('a4');
});

document.getElementById('q5').addEventListener('click', ()=>{
    showhideFaqs('a5');
});

document.getElementById('q6').addEventListener('click', ()=>{
    showhideFaqs('a6');
});

document.getElementById('q7').addEventListener('click', ()=>{
    showhideFaqs('a7');
});

document.getElementById('q8').addEventListener('click', ()=>{
    showhideFaqs('a8');
});

document.getElementById('q9').addEventListener('click', ()=>{
    showhideFaqs('a9');
});











// signup form 


let closeSignupForm = ()=>{
    document.getElementById('signup').setAttribute("class","hide");
    document.getElementById('signupDiv').setAttribute("class","hide");
}


let  showRegForm = ()=>{
    document.getElementById('signupDiv').innerHTML = singupcontent();
    document.getElementById('signup').removeAttribute("class","hide");
    document.getElementById('signupDiv').removeAttribute("class","hide");
    document.getElementById('close').addEventListener('click', closeSignupForm);
    document.getElementById('signup').addEventListener('click', closeSignupForm);
}


let signupBtn = document.querySelectorAll('.regBtn');
signupBtn.forEach((el)=>{
    el.addEventListener("click", showRegForm);
})


