let ugroup = class{
    constructor(){
        this.users = [];
    }


    varify(email){
        let res = this.users.filter((el)=>{
            return el.email ==email;
        });

        if(res.length==1){
            return res[0];
        }else{
            return false;
        }
    }

    adduser(el){
        this.users.push(el);
        return this.users;
    }
}
let user =class{
    constructor(name, email, mobile, pwd){
        this.name = name,
        this.email = email,
        this.mobile = mobile,
        this.password = pwd
    }
}

export {ugroup, user}