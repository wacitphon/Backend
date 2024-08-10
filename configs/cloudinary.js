const cloudinary = require("cloudinary").v2;

cloudinary.config({
   clould_name : '',
   api_key : '' ,
   api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary ;
