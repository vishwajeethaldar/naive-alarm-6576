document.querySelector("#btn").addEventListener("click",display)

function display()
{
    // window.location.href="index.html"
    var enteremail=document.querySelector("#Email").value;
    var enterpassword=document.querySelector("#pass").value;
    var login=JSON.parse(localStorage.getItem("alldata"));
    var flag= false;
    login.forEach(value => {
        if(value.email==enteremail && value.comp==enterpassword)
        {
            flag=true;
        }
    });
    if(flag)
    {
        alert("incorrect credentails")
    }
    else{
        
        alert("log in suceessfully")
        window.location.href="index.html"
    }
}