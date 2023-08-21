export class UserRoles {

public static userRoles:Array<any>=[
  //on 0th index 
    {
        re:[
              {label:'View Enquiry' ,path:'viewEnq'},
              {label:'Add Enquiry' ,path:'addEnq'},
              {label:'Send Mail' ,path:'sendMail'},
              {label:'Fill Loan Form' ,path:'loanApp'}
              
            ],
            oe:[
                {label:'view Enquiry' ,path:'checkCibil'},
                {label:'Verify Application' ,path:'verifyApp'},
            ],
            admin:
            [
              
                {label:'Add Operational Executive' ,path:'addoe'},
                {label:'Add Relational Executive' ,path:'addre'},
                {label:'Add Credit Manager' ,path:'addcm'},
                {label:'Add Bank Accountant' ,path:'addbankacc'},
                {label:'View Enquiry' ,path:'viewenquiry'},
                {label:'Send Mail' ,path:'sendmail'},
                

              
            ]

              

    }
      
]

}
