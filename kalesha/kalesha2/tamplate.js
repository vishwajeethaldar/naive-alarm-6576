// import navbar from "../components/pnavbar.js";
// document.getElementById("mains").innerHTML=navbar();



let Search=()=>{
    let searchbox=document.getElementById("search").value;
    let storeitems=document.getElementById("flexdiv");
    let product=document.querySelectorAll(".card");
    let productname=document.getElementsByTagName("h2")

     for(let i=0;i<productname.length;i++){
       let match=product[i].getElementsByTagName("h2")[0];
       if(match){
        let textvalue= match.textContent || match.innerHTML
            if(textvalue.indexOf(searchbox) >-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
       }
     }
}