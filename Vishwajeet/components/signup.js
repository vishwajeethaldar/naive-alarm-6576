
let singupcontent =  ()=>{
    let signup = 
    `   <span id="close"><i class="fa-solid fa-xmark-large"></i>X</span>
        <div>
            <h1 class="singuptitle">Get Your Free Account</h1>
            <input type="email" name="email" id="signupemail" placeholder="Enter email id">
            <button id="signupbutton"> Sign up now </button>
        </div>
    `

    return signup;
} 


let enterPassword =  ()=>{
    let pwd = 
    `   <span id="close"><i class="fa-solid fa-xmark-large"></i>X</span>
        <div>
            <h1 class="singuptitle">Get Your Free Account</h1>
            <input type="password" name="password" id="password" placeholder="Enter Your Password">
            <p class="error"> </p>  
            <button id="validate"> Sign up now </button>
        </div>
    `
    return pwd;
} 

let otpPage = (email)=>{
    let otp = 
    `   <span id="close"><i class="fa-solid fa-xmark-large"></i>X</span>
        <div>
            <p class="otpTitle">Verify OTP sent to user email : ${email}</p>
            <input type="text" name="otp" id="otp" placeholder="Enter email OTP  : default - 12345">
            <p class="error"> </p>
            <button id="otpbtn"> Validate OTP </button>
        </div>
    `

    return otp;
}
export {singupcontent, enterPassword, otpPage}