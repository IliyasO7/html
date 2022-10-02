class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
         
        User.count++;
       
    }
    static count=0;

    printNumOfUSer(){
        console.log(User.count);
    }

    register()
    {
        console.log(this.userName + " is now registerd");
    }
}

class Member  extends User{
    constructor(userName,email,password,memberPackage)
    {
        super(userName,email,password);
        this.package = memberPackage;
        let todaysDate = new Date();
        const membershipactivetillyear= todaysDate.getFullYear();
        const membershipactivetillMonth= todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDay();

        this.membershipactivietilldate = new Date(
            membershipactivetillyear,
            membershipactivetillMonth + 1,
            membershipactivetillDay
        );
    }

    renewMembership(){
        const membershipactivetillyear = this.membershipactivietilldate.getFullYear();
        const membershipactivetillMonth = this.membershipactivietilldate.getMonth();
        const membershipactivetillDay = this.membershipactivietilldate.getDay();

        if(this.package === "Standard package")
        {
            this.membershipactivietilldate = new Date(
                membershipactivetillyear,
                membershipactivetillMonth + 1,
                membershipactivetillDay
        );
        }
        else if(this.package === "Yearly")
        {
            this.membershipactivietilldate = new Date(
                membershipactivetillyear + 1,
                membershipactivetillMonth,
                membershipactivetillDay
            );

        }

    }

    subscriptionTillDate()
    {
        console.log(
            this.userName +
            " :is subscribed to :"+
            this.package+
            ":uptil:"+
            this.membershipactivietilldate
        );



    }
    getPackage(){
        console.log(this.userName+ "  is subscribed to the :"+ this.package);
    }
}

let bob = new User("iliyas","shaikhiliyas343@gmail",1234);
let boby = new User("yash","kadwkadwk",1234);
//bob.register();
//bob.printNumOfUSer();
let mike = new Member("mike","shaikhmdakwmd",123456,"Standard package");
let yash = new Member("yash","nkdawk",13215,"Yearly");


mike.getPackage();
mike.renewMembership();

mike.subscriptionTillDate();

