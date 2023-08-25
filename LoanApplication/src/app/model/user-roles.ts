export class UserRoles {

public static userRoles:Array<any>=[
  //on 0th index 
    {
        re:[
              {label:'View Enquiry' ,path:'viewEnqq'},
              {label:'Add Enquiry' ,path:'addEnq'},
              {label:'Send Mail' ,path:'sendMail'},
              {label:'Fill Loan Form' ,path:'loanApp'}
              
            ],
            oe:[
                {label:'view Enquiry' ,path:'viewEnq'},
                {label:'Verify Application' ,path:'verifyApp'},
            ],
            admin:
            [
              
                {label:'Add User' ,path:'adduser'},
                {label:'View Enquiry' ,path:'viewenquiry'},
                {label:'Send Mail' ,path:'sendmail'},

            ],
            cm:
            [
              {label:'Check Application' ,path:'checkappl'},
              {label:'Sanction Letter' ,path:'letter'},
            ]
    }
      
]

}
