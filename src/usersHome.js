let datafls = JSON.parse(localStorage.getItem('loggedinUser'));

let plan = JSON.parse(localStorage.getItem('regplan'));
if(plan!==null){
    // document.getElementById('upgrade').setAttribute('class', 'hide');
    document.getElementById('activePlan').removeAttribute('class', 'hide');
    let div = document.getElementById('activePlan');
    let  planname = document.createElement('p')
    planname.innerText = `Active Plan ${plan.planname} `;
    div.append(planname)
}


document.getElementById('usrmmail').innerText = datafls.email;

document.getElementById('usrname').addEventListener('click', ()=>{
    let val = document.getElementById('usermenus').getAttribute('class');

    if(val=='hide'){
        showUsemenu();
    }else{
        hideUsemenu();
    }
});


let showUsemenu = ()=>{
    document.getElementById('usermenus').removeAttribute('class', "hide")
}

let hideUsemenu = ()=>{
    document.getElementById('usermenus').setAttribute('class', "hide")
}


document.getElementById('bodyArea').addEventListener('click', hideUsemenu);

let signout = ()=>{
    localStorage.removeItem('loggedinUser');
    window.location.reload();
}



document.getElementById('usrsignout').addEventListener('click', signout);

document.getElementById('upgrade').addEventListener('click', ()=>{
    window.location.href  = './upgradePlan.html'
})