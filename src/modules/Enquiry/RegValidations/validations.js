const regValidation=
      {
        fnamevalidt:
         {
           required:{value:true,message:'Firstname is must'},
           minLength:{value:3,message:'Firstname must have atleat 3 characters'},
           maxLength:{value:10,message:'Firstname must have less than 10 character'},
           pattern:{value:/^[A-Z]{1}[a-z]/,message:'First latter must be in upper case'}
         },
         lnameValidation:
         {
           required:{value:true,message:'Lastname is must'},
           minLength:{value:3,message:'Lastname must have atleat 3 characters'},
           maxLength:{value:10,message:'Lastname must have less than 10 character'},
           pattern:{value:/^[A-Z]{1}[a-z]/,message:'First latter must be in upper case'}
         },
         contactValidation:
         {
           required:{value:true,message:'Contact is must'},
           minLength:{value:10,message:'Contact must have 10 digits'},
           maxLength:{value:10,message:'Contact must have 10 digits'},
           pattern:{value:/^[1-9]{1}[0-9]/,message:'Enter only digits and do not start with 0'}
         },
         emailValidation:
         {
           required:{value:true,message:'Email is must'},
           minLength:{value:6,message:'Email must have atleat 6 characters'},
           maxLength:{value:30,message:'Email must have less than 30 character'},
           pattern:{value:/^[a-zA-Z0-9]+@gmail.com/,message:'@gmail.com is must'}
         },
         agevalidation:
         {
           required:{value:true,message:'Age is must'},
           min:{value:18,message:'Age must be 18 or above 18'},
           max:{value:60,message:'Age must be less than 60'},
           pattern:{value:/[0-9]/,message:'Enter only digits'}
         },
         adharcardvalidation:
         {
           required:{value:true,message:'Adhar no is must'},
           minLength:{value:12,message:'Please enter valid Adhar no'},
           maxLength:{value:12,message:'Please enter valid Adhar no'},
           pattern:{value:/[0-9]/,message:'Enter only digits'}
         },
         pancardvalidation:
         {
           required:{value:true,message:'Pancard no is must'},
           minLength:{value:8,message:'Please enter valid pan no'},
           maxLength:{value:12,message:'Please enter valid pan no'},
           // pattern:{value:/[0-9]/,message:'Enter only digits'}
         },
      }

      export default regValidation;