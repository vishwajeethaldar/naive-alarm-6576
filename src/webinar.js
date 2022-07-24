import navbar from '../components/navbar.js';
document.getElementById('mains').innerHTML = navbar();

import footer from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();

let webinars = [
    {
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/9fbf4eb4-df34-4648-974e-ed7b571179eb/how-icims-elevated-its-creative-workflow-process-with-wrike-2x.png",
        title: 'CUSTOMER SPOTLIGHT',
        discription:'How iCIMS Elevated Its Creative Workflow Process with Wrike'
    },
    {
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/9fbf4eb4-df34-4648-974e-ed7b571179eb/moving-from-strategy-to-execution-2x.png",
        title:"BEST PRACTICES",
        discription:"Moving From Strategy to Execution"
    },
    {
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/9fbf4eb4-df34-4648-974e-ed7b571179eb/7-actionable-tips-for-project-managers-in-the-new-normal-2x.png",
        title:"ASK THE EXPERT",
        discription:"7 Actionable Tips for Project Managers in the New Normal" 
    },
]

let upcomingSession = [
    {
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-new-users-2x.png",
        type:"GETTING STARTED",
        title:"Wrike Basics for New Users",
        discrption:"New to Wrike? Register for this session to get a quick start, familiarize yourself with the basics, and learn everything you need to know to collaborate efficiently in Wrike"

    },
    {
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-admins-2x.png",
        type:"GETTING STARTED",
        title:"Getting Started for Admins",
        discrption:"In this introductory session, you’ll learn how to quickly set up your Wrike account, onboard your team members, and help everyone be more productive with Wrike."
    }
]


let ondemandSession = [
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-64-2x.png",
            topic:"GETTING STARTED",
            title:"Client contract management",
            team:"Professional Services",
            discription:"Join Wendy Berthol, Customer Success Manager at Wrike, to learn actionable insights that will help you improve your client contract management, understand common pain points, and find out about Wrike’s unique solutions" 
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-new-users-2x.png",
            topic:"GETTING STARTED",
            title:"Wrike Basics for New Users",
            team:"Professional Services",
            discription:"New to Wrike? Watch this recorded session to get a quick start, familiarize yourself with the basics, and learn everything you need to know to collaborate efficiently in Wrike"
            
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-admins-2x.png",
            topic:"GETTING STARTED",
            title:"Getting Started for Admins",
            team:"Professional Services",
            discription:"In this introductory session, you’ll learn how to quickly set up your Wrike account, onboard your team members, and help everyone be more productive with Wrike.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-63-2x.png",
            topic:"ASK THE EXPERT",
            title:"Secure Collaboration in the Cloud: A Wrike + AWS Webinar",
            team:"Professional Services",
            discription:"Tune in to a webinar recording where experts share tips and tricks on how your organization can stay secure and work from anywhere.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-53-2x.png",
            topic:"GETTING STARTED",
            title:"Onboarding for New Users: Business or Enterprise",
            team:"Professional Services",
            discription:"Learn Wrike's essential features to bring some order to the chaos of your work life",       
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-44-2x.png",
            topic:"ON-DEMAND SESSIONS",
            title:"Onboarding for New Users: Professional",
            team:"Marketing and Creative",
            discription:"Learn Wrike's essential features to bring some order to the chaos of your work life.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-32-2x.png",
            topic:"GETTING STARTED",
            title:" Onboarding for Admins: Professional",
            team:"Marketing and Creative",
            discription:"Learn how to prepare your Wrike account for your team and ensure it's ready for action. Plus: best practices, tips, and essential information on account structure."
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-21-2x.png",
            topic:"BEST PRACTICES",
            title:"Improve Project Delivery and Customer Satisfaction",
            team:"Marketing and Creative",
            discription:"Learn how to prepare your Wrike account for your team and ensure it's ready for action. Plus: best practices, tips, and essential information on account structure"
            
            
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-33-2x.png",
            topic:"BEST PRACTICES",
            title:"Getting Clear Visibility for Your Team",
            team:"Marketing and Creative",
            discription:"Learn how to get a bird's-eye view on your teams Projects and tasks using Wrike Calendars, Dashboards, and Reports. We will share customer use cases from our Customer Success team that you can leverage."
            
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-64-2x.png",
            topic:"GETTING STARTED",
            title:"Client contract management",
            team:"Marketing and Creative",
            discription:"Join Wendy Berthol, Customer Success Manager at Wrike, to learn actionable insights that will help you improve your client contract management, understand common pain points, and find out about Wrike’s unique solutions" 
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-new-users-2x.png",
            topic:"GETTING STARTED",
            title:"Wrike Basics for New Users",
            team:"Marketing and Creative",
            discription:"New to Wrike? Watch this recorded session to get a quick start, familiarize yourself with the basics, and learn everything you need to know to collaborate efficiently in Wrike"
            
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-wrike-basics-for-admins-2x.png",
            topic:"GETTING STARTED",
            title:"Getting Started for Admins",
            team:"Marketing and Creative",
            discription:"In this introductory session, you’ll learn how to quickly set up your Wrike account, onboard your team members, and help everyone be more productive with Wrike.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-63-2x.png",
            topic:"ASK THE EXPERT",
            title:"Secure Collaboration in the Cloud: A Wrike + AWS Webinar",
            team:"Marketing and Creative",
            discription:"Tune in to a webinar recording where experts share tips and tricks on how your organization can stay secure and work from anywhere.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-53-2x.png",
            topic:"GETTING STARTED",
            title:"Onboarding for New Users: Business or Enterprise",
            team:"Marketing and Creative",
            discription:"Learn Wrike's essential features to bring some order to the chaos of your work life",       
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-44-2x.png",
            topic:"ON-DEMAND SESSIONS",
            title:"Onboarding for New Users: Professional",
            team:"Marketing and Creative",
            discription:"Learn Wrike's essential features to bring some order to the chaos of your work life.",
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-32-2x.png",
            topic:"GETTING STARTED",
            title:" Onboarding for Admins: Professional",
            team:"Marketing and Creative",
            discription:"Learn how to prepare your Wrike account for your team and ensure it's ready for action. Plus: best practices, tips, and essential information on account structure."
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-21-2x.png",
            topic:"BEST PRACTICES",
            title:"Improve Project Delivery and Customer Satisfaction",
            team:"Marketing and Creative",
            discription:"Learn how to prepare your Wrike account for your team and ensure it's ready for action. Plus: best practices, tips, and essential information on account structure"
            
            
        },
        {
            image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/rebrand-webinar-cover-33-2x.png",
            topic:"BEST PRACTICES",
            title:"Getting Clear Visibility for Your Team",
            team:"Marketing and Creative",
            discription:"Learn how to get a bird's-eye view on your teams Projects and tasks using Wrike Calendars, Dashboards, and Reports. We will share customer use cases from our Customer Success team that you can leverage."
            
        }

]


let featuredWebinar = (data)=>{
    let feaDiv =  document.getElementById('featuredWebinar');
    feaDiv .innerHTML = null;

    data.forEach((el) => {

        let {image,title,discription} = el;
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", 'feturedWebCard');

        let img = document.createElement('img');
        img.setAttribute("class","webinarimg");
        img.src = image;

        let topic = document.createElement('p');
        topic.setAttribute('class', 'webinartopic');
        topic.innerText = title;

        let dis = document.createElement("h1");
        dis.setAttribute('class', 'webinarTitle');
        dis.innerText= discription;

        cardDiv.append(img,topic, dis);
        feaDiv.append(cardDiv);
    });

}


featuredWebinar(webinars);


let appendUpcomingSession = (data)=>{
    let container = document.getElementById("upcomingliveSessionD");
    container.innerHTML = null;

    data.forEach((el) => {

        let {image, type, title, discrption} = el;
        let cardDiv = document.createElement("div");
        console.log(image, type, title, discrption)
        cardDiv.setAttribute("class", 'upcomingWebCard');

        let img = document.createElement('img');
        img.setAttribute("class","webinarimg");
        img.src = image;

        let topic = document.createElement('p');
        topic.setAttribute('class', 'webTitle');
        topic.innerText = title;

        let wbtype = document.createElement('p');
        topic.setAttribute('class', 'webinartype');
        topic.innerText = type;

        let dis = document.createElement("p");
        dis.setAttribute('class', 'description');
        dis.innerText= discrption;

        // console.log(img,wbtype, topic, dis);
        cardDiv.append(img, wbtype,topic, dis);
        container.append(cardDiv);
    });
    console.log(container)
}

appendUpcomingSession(upcomingSession);


let appendonDemandSession = (data)=>{
    let container  = document.getElementById("upcomingOndemandSession");
    container.innerHTML = null;

    data.forEach((el) => {

        let {image,topic, title,team, discription} = el;
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", 'ondemandWebCard');

        let img = document.createElement('img');
        img.setAttribute("class","webinarimg");
        img.src = image;

        let webtopic = document.createElement('p');
        webtopic.setAttribute('class', 'webinartopic');
        webtopic.innerText = topic;

        let webTitle = document.createElement('p');
        webTitle.setAttribute('class', 'webinarTitle');
        webTitle.innerText = title;

        let dis = document.createElement("h1");
        dis.setAttribute('class', 'ondemandDescription');
        dis.innerText= discription;

        cardDiv.append(img,webtopic, webTitle, dis);
        container.append(cardDiv);
    });


}

appendonDemandSession(ondemandSession);





let showhideFaqs = (id, id2)=>{
  
    let div1 = document.getElementById(id)
    let div2 = document.getElementById(id2)

    div1.removeAttribute('class', 'hide');

    div2.setAttribute('class', 'hide');

}



document.getElementById('liveUpcomingsesison').addEventListener("click", ()=>{

    document.getElementById('liveUpcomingsesison').setAttribute('class', 'selected')
    document.getElementById('ondemandsession').removeAttribute('class', 'selected');
    showhideFaqs('upcomingliveSessionD', 'upcomingOndemandSession');
});

document.getElementById('ondemandsession').addEventListener("click", ()=>{
    document.getElementById('ondemandsession').setAttribute('class', 'selected');
    document.getElementById('liveUpcomingsesison').removeAttribute('class', 'selected');
    showhideFaqs('upcomingOndemandSession', 'upcomingliveSessionD');
});