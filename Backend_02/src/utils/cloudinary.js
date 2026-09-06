import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath){
            return null;
        }
        const uploadResult=await cloudinary.uploader.upload(localFilePath, {resource_type: 'auto'});

        console.log("file is uploaded on cloudinary.", uploadResult.url);

//Cloudinary upload succeeded, so now delete the temporary local file.
        fs.unlinkSync(localFilePath);

        return uploadResult;
    }catch(error){

//Even though the upload failed, you still want to clean up the temporary file.
        if(localFilePath && fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
}

export {uploadOnCloudinary}