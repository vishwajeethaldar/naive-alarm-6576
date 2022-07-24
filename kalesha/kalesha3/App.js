import navbar from "../components/pnavbar.js";
document.getElementById("mains").innerHTML=navbar();
import footer from "../components/footerpart.js";
document.getElementById("footer").innerHTML=footer();




// const btns=document.querySelectorAll(".btn");
// const storeprodocts=document.querySelectorAll(".files");
// for(  let i=0;i<btns.length;i++){
//    btns[i].addEventListener("click",(e)=>{
//        e.preventDefault();
//        const filter=e.target.dataset.filter;
//     //    console.log(filter)
//     //    console.log("kalesha")
//     storeprodocts.forEach((el)=>{
//         if(filter=="all"){
//             el.style.display="block"
//         }else{
//             if(el.classsList.contains(filter)){
//                 el.style.display="block"
//             }else{
//                 el.style.display="none"
//             }
//         }
//     })



//    })
// }
let indicator=document.querySelector(".indicator").children;
let main=document.querySelector(".gridhover").children;
for(let i=0;i<indicator.length;i++){
    indicator[i].onclick=function(){
        for(let x=0;x<indicator.length;x++){
            indicator[x].classList.remove("active");
        }
        this.classList.add("active");
        const displayItem=this.classList=this.getAttribute("data-filter");
        for(let z=0;z<indicator.length;z++){
                main[z].style="scale(0)";
                setTimeout(()=>{
                    main[z].style.display="none";
                },500)
                if((main[z].getAttribute("data-category")==displayItem)|| displayItem=="all"){
                     
                    main[z].style="scale()";
                    setTimeout(()=>{
                        main[z].style.display="block";
                    },500)

                }
        }
    }
}