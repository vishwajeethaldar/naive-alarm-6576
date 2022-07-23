import navbar from '../components/navbar.js';
document.getElementById('mains').innerHTML = navbar();

import footer from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();

let guides = [
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/1bb7e7d3-8b3f-4090-bad8-4663b641bf2f/rebrand-icon-teams-project-management-pmo-inverse.svg",
        title:"Project Management",
        description:"Have questions on project management, methodologies, or what style of working is best for you? Start here!",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/18976dda-b72f-46dc-8f7e-6537feef8581/rebrand-icon-teams-it-inverse.svg",
        title:"Remote Work",
        description:"From setting up your home office to hiring a team, here’s what you need to know to WFH successfully.",
        more:"Learn More"
     
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-program-management-invers.svg",
        title:"Agile",
        description:"Themes, Stories, and Epics, oh my! Read about everything related to Agile in our comprehensive guide.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/04de7154-402d-43e5-b42a-f55fc255f974/rebrand-icon-teams-business-operations-inverse-invers.svg",
        title:"Return to Work",
        description:"Manage whatever the future of work may be with our comprehensive, easy-to-use guide.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/e6631b62-9b36-47d7-9af2-ffb6ad66eb79/rebrand-icon-teams-marketing-inverse.svg",
        title:"Marketing",
        description:"Every question you've ever had about how Marketing projects (and Marketing teams) work, in one handy place.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/1bb7e7d3-8b3f-4090-bad8-4663b641bf2f/rebrand-icon-teams-professional-services-inverse.svg",
        title:"Professional Services",
        description:"Make your professional services business more efficient, productive, and profitable with our guide.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/32f9a6cc-e481-4512-812c-fcfa759cc257/rebrand-icon-hh-goals-inverse.svg",
        title:"Scrum",
        description:"Our essential guide to mastering the basics of Scrum, including sprints, daily meetings, and team roles.",
        more:"Learn More"

    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/04de7154-402d-43e5-b42a-f55fc255f974/rebrand-icon-teams-product-management-inverse-invers.svg",
        title:"Kanban",
        description:"Discover the fundamentals of Kanban with our beginner’s guide, including Kanban boards and retrospectives.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/04de7154-402d-43e5-b42a-f55fc255f974/rebrand-icon-teams-pmo-inverse-invers.svg",
        title:"Product Management",
        description:"Learn everything you need to know for product success, from organizing your backlog to understanding customer requirements.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/04de7154-402d-43e5-b42a-f55fc255f974/rebrand-icon-teams-digital-marketing-teams-inverse-invers.svg",
        title:" Digital Marketing",
        description:"From social media to SEO, find everything you need to know about digital marketing in one handy guide.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-program-management-invers.svg",
        title:"Go-to-Market",
        description:"Bring your product from ideation to market successfully with our comprehensive Go-To-Market Guide.",
        more:"Learn More"
    },
    {
        image:"https://web-static.wrike.com/tp/storage/uploads/e6631b62-9b36-47d7-9af2-ffb6ad66eb79/rebrand-icon-teams-company-wide-inverse.svg",
        title:"Collaborative Work",
        description:"Want to learn more about teamwork and collaboration? This guide is your first port of call.",
        more:"Learn More"
    },
]


let appendGuide = (data)=>{
    let containerDiv = document.getElementById('guides');
    containerDiv.innerHTML = null;

    data.forEach((el) => {
        let {image, title, description, more} = el;

        let div = document.createElement("div");
        div.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.src = image;

        let tit= document.createElement('p');
        tit.innerText = title;

        let des = document.createElement('p');
        des.innerText = description;
        
        let mor =  document.createElement('p');
        mor.innerText = more;

        div.append(img, tit, des, mor);

        containerDiv.append(div);
    });
}



appendGuide(guides);