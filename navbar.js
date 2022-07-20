let navbar = () =>{
return  ` 
 <div class="logo"><a href="index.html"><img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/wrike-inc-vector-logo-2022.png" alt=""></a></div>
     <div class="nav-links">
        <ul class="links">
            <li><a href="">Product</a>
                <i class='bx bx-chevron-down arrow htmlcss-arrow'></i>
            <ul class="htmlCss-sub-menu sub-menu">
                <li><a href="">Take a Tour</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Project Templates</a></li>
                <li><a href="">WApps & Integtations</a></li>
                <li><a href="">Security</a></li>
            </ul>
            </li>
          
            <li>
                <a href="">Pricing</a></li>
            <li>
                 <a href="">Resources</a>
                 <i class='bx bx-chevron-down arrow css-arrow'></i>
                 <ul class="css-sub-menu sub-menu">
                    <li><a href="">Resources</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Webinars</a></li>
                    <li><a href="">Case studies</a></li>
                    <li><a href="">Educational Guides</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Webinars</a></li>
                    <li><a href="">Case studies</a></li>
                    <li><a href="">Educational Guides</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Webinars</a></li>
                    <li><a href="">Case studies</a></li>
                    <li><a href="">Educational Guides</a></li>
                </ul>
                </li>
                <li>
                    <a href="">Solutions</a>
                    <i class='bx bx-chevron-down arrow js-arrow'></i>
                    <ul class="js-sub-menu sub-menu">
                        <li><a href="">Projects Managers</a></li>
                        <li><a href="">Marketing</a></li>
                        <li><a href="">Creative</a></li>
                        <li><a href="">Profesional Services</a></li>
                        <li><a href="">Product Development</a></li>
                        <li><a href="">Company Wide</a></li>
                        <li class="more">
                            <a href="">All teams</a>
                            <i class='bx bx-chevron-right arrow more-arrow'></i>
                            <ul class="more-sub-menu sub-menu">
                                <li><a href="">Projects Managers</a></li>
                                <li><a href="">Marketing</a></li>
                                <li><a href="">Creative</a></li>
                                <li><a href="">Profesional Services</a></li>
                                <li><a href="">Product Development</a></li>
                                <li><a href="">Company Wide</a></li>
                        </li>
                    </ul>
                </li>
        </ul>
     </div> 

     <div class="second">
      <ul class="linking">
        <li>
            <a href="">En</a>
            <i class="bx bx-chevron-down arro ks-arrow"></i>
            <ul class="sub-language sub-menus">
             <li>English</li>
             <li>Spanish</li>
             <li>Portugese</li>
             <li>German</li>
             <li>Hindi</li>
             <li>Bangla</li>
             <li>Polski</li>
             <li>French</li>
             <li>Russian</li>
             <li>Chinese</li>
            </ul>
        </li>
    </ul>
      <h3>Contact sales</h3>
      <input type="button" class="btn" value="Log in">
    <input type="button" value="Start for free">
     </div>`;
}

export default navbar;










































// const body = document.querySelector("body"),
//       nav = document.querySelector("nav"),
//       modeToggle = document.querySelector(".dark-light"),
//       searchToggle = document.querySelector(".searchToggle"),
//       sidebarOpen = document.querySelector(".sidebarOpen"),
//       siderbarClose = document.querySelector(".siderbarClose");

//       let getMode = localStorage.getItem("mode");
//           if(getMode && getMode === "dark-mode"){
//             body.classList.add("dark");
//           }

// // js code to toggle dark and light mode
//       modeToggle.addEventListener("click" , () =>{
//         modeToggle.classList.toggle("active");
//         body.classList.toggle("dark");

//         // js code to keep user selected mode even page refresh or file reopen
//         if(!body.classList.contains("dark")){
//             localStorage.setItem("mode" , "light-mode");
//         }else{
//             localStorage.setItem("mode" , "dark-mode");
//         }
//       });

// // js code to toggle search box
//         searchToggle.addEventListener("click" , () =>{
//         searchToggle.classList.toggle("active");
//       });
 
      
// //   js code to toggle sidebar
// sidebarOpen.addEventListener("click" , () =>{
//     nav.classList.add("active");
// });

// body.addEventListener("click" , e =>{
//     let clickedElm = e.target;

//     if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//         nav.classList.remove("active");
//     }
// });


