
const mongoose = require('mongoose');
/* mongoose.set('useCreateIndex', true); */

const userSchema = mongoose.Schema({
    username: {
        type: String,
  
      },
      password: {
        type: String,
      
      },
        email: {
        type: String,
        unique: true,

      },
      profileImg: {
        type: String,

      }
    
    
});

const usuario=mongoose.model('users', userSchema);
module.exports = usuario;