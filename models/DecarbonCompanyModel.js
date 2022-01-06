const moongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

/**How access and token works only we are perfoming just restructuring****/

var DecarbisationSchema = new moongoose.Schema({

    firm_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {

            validator: validator.isEmail,
            message: '{VALUE} Entered Invalid Email'
        }

    },
    mobile: {

        type: String
    },

    profile_image: {

        type: String,
        default:null

    },
    password: {
        type: String,
        required: true
    },

    created_at: {
        type: String,
        default: new Date()
    },

    created_by: {

        type: Number,
        default: 0
    },

    updated_at: {

        type: String,
        default: null
    },

    updated_by: {

        type: String,
        default: 0
    },

    companys_licenece:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        requied:true,
    },
    status: {

        type: String,
        default: 'active'

    },
    tokens: [{
        access: {

            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});


/*****For store hashing password*******/

// AdminSchema.pre('save',function(next){

//     var admin_details = this;

//     if(admin_details.isModified('password')){

//         bcrypt.genSalt(10,(err,salt)=>{

//         bcrypt.hash(admin_details.password,salt,(err,hash)=>{

//                 admin_details.password = hash;

//                 next();

//             });

//         });

//     } else {

//         next();
//     }

// });


/*****Use Login******/

// AdminSchema.statics.checkUserLogin = function (email,password){

//     var User_find = this;

//     return User_find.findOne({email:email}).then((check)=>{

//         if(!check){

//             return Promise.reject('Invalid Email Found');
//         }


//     return new Promise((resolve,reject)=>{

//         bcrypt.compare(password,check.password,(err,res)=>{

//             if(res){

//                 resolve(check);

//             } else {

//                 reject(err);

//             }

//         });

//     });

//     });

// }

/***********Check user password and update*******/

// AdminSchema.statics.checkUserPassword = function (uid,old_pwd,new_pwd){

//         var User_find = this;

//         return User_find.findById({'_id':uid}).then((check)=>{

//         if(!check){

//             return Promise.reject('Invalid User Found');

//         }

//         return new Promise((resolve,reject)=>{

//         bcrypt.compare(old_pwd,check.password,(err,res)=>{

//                 if(res){

//                         bcrypt.genSalt(10,(err,salt)=>{

//                         bcrypt.hash(new_pwd,salt,(err,hash)=>{

//                         new_pwd = hash;

//                         var current_time = Date.now();

//                         User_find.findByIdAndUpdate(uid,{$set:{updated_at:current_time,password:new_pwd}},{new:true}).then((successa_up)=>{

//                         resolve(check);
//                     });


//                 });

//             });

//         } else {

//                     reject(err);

//                 }

//     });

// });



//     });

// }


var Decarbisation = moongoose.model('Decarbisation', DecarbisationSchema);

module.exports =  Decarbisation ;
