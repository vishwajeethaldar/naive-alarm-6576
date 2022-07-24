document.querySelector("#btn").addEventListener("click",myfunction)

var arr=JSON.parse(localStorage.getItem("users")) || []
function myfunction()
{

    var obj={
    name:document.querySelector("#name").value,
    phone:document.querySelector("#phone").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#comp").value

    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("users",JSON.stringify(arr));


    if(document.querySelector("#name").value=="" || document.querySelector("#phone").value=="" ||
     document.querySelector("#email").value=="" || document.querySelector("#comp").value=="")
    {
        alert("enter all details")
    }
    else{
        alert("signup successfully")
        window.location.href="login.html"
    }
}