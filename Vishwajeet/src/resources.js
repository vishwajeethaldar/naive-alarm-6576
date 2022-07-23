import navbar from '../components/navbar.js';
document.getElementById('mains').innerHTML = navbar();

import footer from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();

let slides = [
    {
        imglink:'https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/use-case-carnival.png',
        topic:'USE CASES',
        title:'The Use Case Carnival: Wrike Use Cases for Every Team',
        discription:"Wondering how you can use Wrike in your role or industry? We've rounded up 24 use cases that demonstrate the power of Wrike in a range of teams, from business operations to creative production."
    },
     {
        imglink:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/collaborate.png",
        topic:"COLLABORATE",
        title:"Learn From Industry Experts: View Collaborate 2021 on Demand",
        discription:"View videos from Collaborate 2021 and discover exclusive insights from industry and thought leaders on the latest work management trends, challenges, and solutions."
    },
    {
        imglink:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/ebook-a-definitive-guide-to-hybrid-work.png",
        topic:"NEW USERS",
        title:"New to Wrike? This Webinar Will Get You Started",
        discription:"Jumpstart your Wrike life with this hour-long webinar where you'll learn how to set up Wrike, familiarize yourself with the basics, and learn everything you need to collaborate efficiently in Wrike."
    },
    {
        imglink:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/wrike-for-new-users.png",
        topic:"EBOOKS",
        title:"Building Flexible Workplaces: A Definitive Guide to Hybrid Work",
        discription:"Enable a flexible workforce with our eBook guide to navigating hybrid work. Learn about the benefits and challenges of hybrid work, as well as tips and tricks for creating your own hybrid work model."
    },
    {
        imglink:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/ebook-25-must-know-productivity-tips.png",
        topic:"EBOOKS",
        title:"Work Smarter, Not Harder: 25 Must-Know Productivity Tips",
        discription:"These 25 productivity tips will transform the way you work. Learn how to embrace smarter planning, automate repetitive tasks, and use all-in-one work management to become more productive today."
    },
    {
        imglink:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/wrike-free-trial.png",
        topic:"TRY WRIKE",
        title:"Still have questions? Try Wrike for yourself with a free trial",
        discription:"With no credit card, no commitment, and no downloads, you can try Wrike hassle-free on your own time. Discover how our award-winning work management platform can streamline every aspect of your work. Search"
    }
]

let resource = [
    {
        content_type:"EBOOk",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/03b38a3c-2b9d-4c89-a2aa-f22e01b471e5/resources-5-steps-how-marketing-leaders-succeed-with-digital-work-management-2x.png",
        title:"5 Steps: How Marketing Leaders Succeed with Digital Work Management"
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/illustration-atom-85.png",
        title:"How to Build an Omnichannel Marketing StratEGY"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/f7b94c4f-d338-48b2-adc0-9053be0630c9/resources-ebook-forrester-wave-q4-2020-2x.png",
        title:"The Forrester Wave™: Collaborative Work Management Tools, Q4 2020"       
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/d700aa52-f42b-4d0a-89c9-766f846e2fba/resources-marketing-agency-client-management-2x.png",
        title:"5 Things Marketing Agencies Can’t Hide From Clients"
    },
     {
        content_type:"REPORT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ff564d62-3db6-4490-9ea1-c7aecdcf4a24/resources-g2-marketing-resource-management-report-2x.png",
        title:"Wrike Named #1 Marketing Resource Management Solution by G2"
    }, {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/92dde6e6-28a8-4c44-8f51-f0f12e95d6eb/resources-marketing-resource-management-software-2x.png",
        title:"6 Best Practices for Adopting Marketing Resource Management"
    }
    , {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/6c3f3ab1-b82f-4fe3-95fa-dd13d0c91978/resources-optimize-marketing-performance-management.png",
        title:" A Guide to Perfecting Marketing Performance Management"
    }
    , {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/frame-199.png",
        title:"Versatile Work Management for Marketers"
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2d8b6329-a779-4e6c-98d1-68b0379c18b2/resources-how-to-choose-marketing-software-2x.png",
        title:"How to Choose Marketing Software"
    },
    {
        content_type:"BLOGSPOT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/b1d6371b-bd4f-41d2-bcd1-e50c998a3cc0/reuters-webinar-ryanair-2x.png",
        title:"5 Key Takeaways From Our Reuters Webinar With Ryanair"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/rectangle-282-2.png",
        title:"Highlighting the Customer's Voice: 32 G2 Reviews About the Wrike Platform"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/rectangle-278.png",
        title:"The CMO's Formula To 3x Your Digital Marketing Campaign Results"
    },
    {
        content_type:"MEDIA",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/6-wrike-makes-deloittes-technology-fast-500-list.png",
        title:"Wrike Named a Deloitte Technology Fast 500™ Award Winner for Sixth Consecutive Year"
    },
    {
        content_type:"BLOGSPOT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/istock-1185444198.png",
        title:"More Results, Less Busywork: Introducing Wrike's Automation Engine"
    },
    {
        content_type:"MEDIA",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/3-adobe-extension.png",
        title:"Wrike Announces New Integrations With Adobe For Faster, Smarter Collaboration"
    },
    {
        content_type:"EBOOk",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/03b38a3c-2b9d-4c89-a2aa-f22e01b471e5/resources-5-steps-how-marketing-leaders-succeed-with-digital-work-management-2x.png",
        title:"5 Steps: How Marketing Leaders Succeed with Digital Work Management"
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/illustration-atom-85.png",
        title:"How to Build an Omnichannel Marketing StratEGY"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/f7b94c4f-d338-48b2-adc0-9053be0630c9/resources-ebook-forrester-wave-q4-2020-2x.png",
        title:"The Forrester Wave™: Collaborative Work Management Tools, Q4 2020"       
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/d700aa52-f42b-4d0a-89c9-766f846e2fba/resources-marketing-agency-client-management-2x.png",
        title:"5 Things Marketing Agencies Can’t Hide From Clients"
    },
     {
        content_type:"REPORT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ff564d62-3db6-4490-9ea1-c7aecdcf4a24/resources-g2-marketing-resource-management-report-2x.png",
        title:"Wrike Named #1 Marketing Resource Management Solution by G2"
    }, {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/92dde6e6-28a8-4c44-8f51-f0f12e95d6eb/resources-marketing-resource-management-software-2x.png",
        title:"6 Best Practices for Adopting Marketing Resource Management"
    }
    , {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/6c3f3ab1-b82f-4fe3-95fa-dd13d0c91978/resources-optimize-marketing-performance-management.png",
        title:" A Guide to Perfecting Marketing Performance Management"
    }
    , {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/frame-199.png",
        title:"Versatile Work Management for Marketers"
    },
    {
        content_type:"INFOGRAPHIC",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2d8b6329-a779-4e6c-98d1-68b0379c18b2/resources-how-to-choose-marketing-software-2x.png",
        title:"How to Choose Marketing Software"
    },
    {
        content_type:"BLOGSPOT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/b1d6371b-bd4f-41d2-bcd1-e50c998a3cc0/reuters-webinar-ryanair-2x.png",
        title:"5 Key Takeaways From Our Reuters Webinar With Ryanair"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/rectangle-282-2.png",
        title:"Highlighting the Customer's Voice: 32 G2 Reviews About the Wrike Platform"
    },
    {
        content_type:"EBOOK",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/rectangle-278.png",
        title:"The CMO's Formula To 3x Your Digital Marketing Campaign Results"
    },
    {
        content_type:"MEDIA",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/6-wrike-makes-deloittes-technology-fast-500-list.png",
        title:"Wrike Named a Deloitte Technology Fast 500™ Award Winner for Sixth Consecutive Year"
    },
    {
        content_type:"BLOGSPOT",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/istock-1185444198.png",
        title:"More Results, Less Busywork: Introducing Wrike's Automation Engine"
    },
    {
        content_type:"MEDIA",
        topic:'marketingManagement',
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/4c905d39-77c6-4935-98b4-521997af9969/3-adobe-extension.png",
        title:"Wrike Announces New Integrations With Adobe For Faster, Smarter Collaboration"
    }

]


let res = [
    {
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-6.png"
        
    },
    {
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-4.png"  
    }
    ,
    {
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards.png"  
    },
    {
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-1.png"
        
    }
    ,{
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-2.png"
        
    },
    {
        title:"Wrike Blog",
        description:"Tips, stories, and new approaches to work management, collaboration, productivity, and more. Gain insights from highly effective teams and emerging work trends.",
        image:"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-3.png"
        
    }


]


let contType = {};
let contTopic = {};
let appendResource = (data)=>{
    let container = document.getElementById('resource');
    container.innerHTML = null;

    data.forEach((el)=>{
        let {content_type, topic, image, title} = el;

        let card = document.createElement("div");
            card.setAttribute("class", 'card');
        let imge = document.createElement('img');
            imge.src = image;
        let titl = document.createElement('p');
            titl.innerText  = title; 

        let type  =  document.createElement("p");
        type.innerText = content_type;

        // let topic_  =  document.createElement("p");
        // des.innerText = topic;
        card.append(imge,type,titl);
        container.append(card);

        contType[content_type] = content_type;
        contTopic[topic] = topic;
    });
}

appendResource(resource);

let slideDivs = [];
let appendsliders = (data)=>{
    let container = document.getElementById('slider');
    container.innerHTML = null;

    data.forEach((el)=>{
        let {imglink, topic, title, discription} = el;

        let card = document.createElement("div");
        card.setAttribute("class", 'card')
        
        let imge = document.createElement('img');
            imge.src = imglink;
        
        let topics = document.createElement('h3');
        topics.innerHTML  = topic; 
        
        let titles = document.createElement('p');
        titles.innerHTML  = title; 

        let des  =  document.createElement("p");
        des.innerText = discription;

        card.append(imge, topics,titles,des);

        
        container.append(card);
        slideDivs.push(card);
    })
} 

let count = 0;
let container = document.getElementById('slider');
// container.append(slideDivs[0], slideDivs[1], slideDivs[2]);

let i = setInterval(()=>{
    count++;
    if(count==1){
        container.innerHTML = null;
        container.append(slideDivs[3], slideDivs[4], slideDivs[5]);
    }
    if(count==2){
        container.innerHTML = null;
        container.append(slideDivs[0], slideDivs[1], slideDivs[2]);
        count=0;
    } 

}, 5000);


appendsliders(slides);

// let appendResources = ()=>{
//  let resourceDiv = document.getElementById('resource')
// }

let appendResourceCards = (data)=>{
    let cardsContainer = document.getElementById('resourceCards')
    cardsContainer.innerHTML = null;

    data.forEach((el) => {
        let {title, description, image} = el;

        let card = document.createElement("div");
        
        let imge = document.createElement('img');
            imge.src = image;
        let titl = document.createElement('p');
            titl.innerText  = title; 
        let des  =  document.createElement("p");
        des.innerText = description;

        card.append(titl, des, imge);
        cardsContainer.append(card);
    });
}
appendResourceCards(res);



let funcScroll = ()=>{
    console.log('rrr');
}
document.getElementById('resourceCards').addEventListener('click', funcScroll)



// filters 


let filterTopic = ()=>{   
let div2 =  document.getElementById('contenttypefilter');
let select = document.createElement("select");
select.setAttribute("id",'filterTopic');
let opt1 = document.createElement("option");
opt1.innerText = 'Select Topic';
select.append(opt1)
for(let i in contType){
    let opt = document.createElement("option");
    opt.innerText = i;
    select.append(opt);
}
    div2.append(select);
}

filterTopic();




let filterData = ()=>{
    let filtOpt = document.getElementById('filterTopic').value;
    let filData; 
    if(filtOpt=="Select Topic"){
        console.log(filtOpt=="Select Topic");
        filData = resource;
    }else{
         filData = resource.filter((el)=>{
            return el.content_type == filtOpt; 
        })
    }
    appendResource(filData);
}

document.getElementById('filterTopic').addEventListener("change", filterData);



let scrollcontainer = document.getElementById('resourceCards')

scrollcontainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    console.log(evt);
    console.log(scrollcontainer.scrollLeft)
});
