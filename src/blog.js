import navbar from '../components/navbar.js';
document.getElementById('mains').innerHTML = navbar();
import footer from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();


let blogs = [
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/07/iStock-1162153258-e1657551905368.jpg?av=4e398b4e1fe258a2927839072b931a8a',
        group:'MARKETING',
        title:'Do Remote Marketing Jobs Offer Higher Salaries?',
        description:'Has the rise of remote work led to higher salaries in remote marketing roles? Find out...'
    },
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/06/iStock-1337293481-e1655205774953.jpg?av=f8e86dec07f75ce93bf331b1be7311f2',
        group:'REMOTE WORKING',
        title:'Asynchronous Work Explained for 2022',
        description:'Asynchronous work allows remote teams to set their own schedules and take advantage of...'
    },
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/06/iStock-1281882590-e1654786824428.jpg?av=1f1394b88e1f112d9611d7332e554654',
        group:'REMOTE WORKING',
        title:'Return to Work: Which Global Cities Have Gone Back to the Office the Fastest?',
        description:'Discover which cities around the world have returned to office-based working the fastest,...'
    },
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/06/iStock-1281882590-e1654786824428.jpg?av=1f1394b88e1f112d9611d7332e554654',
        group:'REMOTE WORKING',
        title:'Return to Work: Which Global Cities Have Gone Back to the Office the Fastest?',
        description:'Discover which cities around the world have returned to office-based working the fastest,...'
    },
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/02/iStock-1358218214.jpg?av=925bc72841afbd084c93d8901bf516ca',
        group:'REMOTE WORKING',
        title:'Why Great Culture is Essential for a Hybrid Workplace',
        description:'The hybrid work model is here to stay, folks. The great work-from-home experiment of the...'
    },
    {
        image:'https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2021/12/iStock-1288726414.jpg?av=6165990bc20266a05e9aec734068e4cf',
        group:'REMOTE WORKING',
        title:'How to Plan a Virtual Christmas Party for Remote Employees',
        description:'As 2021 draws to a close, many employees are still working remotely across the world....'
    }
]




let appendBlogs = (data)=>{
    let blogDiv = document.getElementById('blogs');
    blogDiv.innerHTML = null;

    data.forEach(element => {
        let {image, group, title, description} = element;

        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = image;

        let grp =  document.createElement('p');
        grp.innerText =  group;

        let titl = document.createElement("p");
        titl.innerText = title;

        let des =  document.createElement('p');
        des.innerText  = description;

        div.append(img, grp, titl, des);
        blogDiv.append(div);
    });
}

appendBlogs(blogs);
