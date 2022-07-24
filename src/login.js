document.querySelector("#btn").addEventListener("click",display)

function display()
{
    // window.location.href="index.html"
    var enteremail=document.querySelector("#Email").value;
    var enterpassword=document.querySelector("#pass").value;

    console.log(enteremail)
    console.log(enterpassword)
    var login=JSON.parse(localStorage.getItem("users")) || []


    console.log(login)
    var flag=     login.filter(value => {
        // if(value.email==enteremail && value.comp==enterpassword)
        // {
        //     flag=true;
        // }
// console.log(value.email==enteremail,value.password==enterpassword)
        return value.email==enteremail && value.password==enterpassword
    });
    console.log(flag)
    if(flag.length>0)
    {
        
    localStorage.setItem("loggedinUser",JSON.stringify(flag[0]))
        alert("log in suceessfully")
        window.location.href="./userPage.html"

    }
    else{
        
        
       
        alert("incorrect credentials")
    }
        
    
}