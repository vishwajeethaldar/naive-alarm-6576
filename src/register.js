import navbar from '../components/navbar.js';
document.getElementById('mains').innerHTML = navbar();


import {user, ugroup} from '../src/classes.js';
import {singupcontent, enterPassword, otpPage} from '../components/signup.js'
// import {} from '../components/signup.js'


let users = new ugroup();

let usr;
users.users = JSON.parse(localStorage.getItem("users"))||[];

let login = (usr)=>{
    let otpval = document.getElementById('otp').value;
    if(otpval==='12345'){
        let regusrs = users.adduser(usr);
        localStorage.setItem('users', JSON.stringify(regusrs));
        localStorage.setItem('loggedinUser', JSON.stringify(usr));
        window.location.href='./userPage.html';
    }else{
        document.getElementById('otp').setAttribute('class', 'redoutline');
        let err = document.querySelector('.error')
        err.innerText = 'Invalid OTP';
        console.log(err);
    }
    
}


let  validateuser = (email, pwd)=>{
    let res = users.varify(email);
    if(res!==false){
        if(res.password==pwd){
            localStorage.setItem('loggedinUser', JSON.stringify(res));
            window.location.href='./userPage.html';
        }else{
            document.getElementById('password').setAttribute('class', 'redoutline');
            let err = document.querySelector('.error');
            err.innerText = 'Invalid Password';
        }
    }else{
        usr  = new user("", "",email,pwd);
            document.getElementById('signupDiv').innerHTML = otpPage(email);
            document.getElementById('otpbtn').addEventListener('click', ()=>{
            login(usr);
        })
    }
}






let email ="";
let pwd ="";


let signupbtns  = document.querySelectorAll('.SignupButton');

signupbtns.forEach((el)=>{
   el.addEventListener('click', ()=>{
    document.getElementById('signupbutton').addEventListener('click', ()=>{
        email = document.getElementById('signupemail').value;
        let userFLS = JSON.parse(localStorage.getItem('loggedinUser'));
        if(userFLS!==null){
            if(userFLS.email==email){
                window.location.href='./userPage.html';
            }else{
                document.getElementById('signupDiv').innerHTML = enterPassword();
                document.getElementById('close').addEventListener('click', closeSignupForm);
                document.getElementById('validate').addEventListener('click', ()=>{
                    pwd = document.getElementById('password').value;
                    validateuser(email, pwd);
                });
            }
        }else{
            document.getElementById('signupDiv').innerHTML = enterPassword();
            document.getElementById('close').addEventListener('click', closeSignupForm);
            document.getElementById('validate').addEventListener('click', ()=>{
                pwd = document.getElementById('password').value;
                validateuser(email, pwd);
            });
        }

    });
    
   })
})


let closeSignupForm = ()=>{
    document.getElementById('signup').setAttribute("class","hide");
    document.getElementById('signupDiv').setAttribute("class","hide");
}

