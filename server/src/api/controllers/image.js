const Image = require('../models/image');
const sharp = require('sharp');


const createThumbnail = async dataBuff => {
    return await sharp(dataBuff)
        .resize(300, 225)
        .toBuffer()
}

const saveImage = async(url, urlThumbnail) => {
    var img = new Image();
    img.url = url;
    img.urlThumbnail = urlThumbnail;
    return await img.save();
}

const uploadToS3 = async file => {
    try {
        var params = {
            Bucket: 'losticka-veselka',
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };
        var uploadedImage = await uploadRawImageToS3(params);

        var thumbnailData = await createThumbnail(params.Body); 
        params.Key = 'T-' + params.Key;
        params.Body = thumbnailData;
        var uploadedThumb = await uploadRawImageToS3(params);
        console.log(uploadedThumb);

        return await saveImage(uploadedImage.Location, uploadedThumb.Location);
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

const uploadRawImageToS3 = async params => {
    try{
        return await s3.upload(params).promise();
        return (null,{ //just fake the AWS
            ETag: '"08f655043c9ba5fcd2855a42cbfa8567"',
            Location: 'https://losticka-veselka.s3.eu-central-1.amazonaws.com/T-announce_read.gif',
            key: 'T-announce_read.gif',
            Key: 'T-announce_read.gif',
            Bucket: 'losticka-veselka'
        });
    }
    catch (e){
        console.log(e);
        return e;
    }
}

module.exports = {
    createThumbnail,
    saveImage,
    uploadToS3,
    uploadRawImageToS3
}