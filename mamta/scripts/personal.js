document.querySelector("#mk").addEventListener("click",()=>{
logout()
    // document.querySelector("#logout").addEventListener("click",logout)
    
})


document.querySelector("#mk").addEventListener("mouseleave",()=>{
    // display(false) 
    setTimeout(()=>{
        display(false) 
    },5000)
    // console.log(1)
    // console.log(1)
})

// display()



function display(istrue)
{
    if(istrue)
    {

   document.querySelector("#hov").innerHTML=""
    var card=document.createElement("div")
    var name=document.createElement("p")
    name.innerText="Mamta katariya's Team"

    var setting=document.createElement("p")
    setting.innerText="Settings"

    var work=document.createElement("p")
    work.innerText="Workspace themes"

    var app=document.createElement("p")
    app.innerText="Apss & Integrations"

    var mobile=document.createElement("p")
    mobile.innerText="Mobile Apps"

    var upgrade=document.createElement("p")
    upgrade.innerText="Upgrade"

    var Help=document.createElement("p")
    Help.innerText="Help"

    var privacy=document.createElement("p")
    privacy.innerText="privacy policy"

    var button=document.createElement("button")
    button.innerText="Log Out"
    button.setAttribute("id","log")

    
    // logout()
    // document.querySelector("")




    card.append(name,setting,work,app,mobile,upgrade,Help,privacy,button)
    document.querySelector("#hov").append(card)
    document.querySelector("#log").addEventListener("click",()=>{
        let len=document.querySelector("#log")
        console.log(len)
    })
   
    // logout()
    }
    else{
        let data=document.querySelector("#hov")
        data.innerHTML=""
    }



}



// document.querySelector("#logout").addEventListener("click",logout)
function logout()
{
     
    // window.location.href='home.html'
    localStorage.removeItem("loggedinUser")
    window.location.reload()
    console.log("hello")
}



