var mongoose = require('mongoose');


var transactionSchema = mongoose.Schema({

   trasactionHash:String,
   status:{
       type:String,
       default:"Not Delivered"
        }
});

var transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel;



