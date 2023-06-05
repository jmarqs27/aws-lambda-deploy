import { log } from "./log.mjs";
import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({ region : 'us-east-2' })

export const handler = async(event, _, callback) => {

    const record = event.Records[0];
    const Bucket = record.S3.bucket.name;
    const key = record.S3.object.key;
    const getObjectResult = s3Client.getObject({
        Bucket,
        key,
    }).then(getObjectResult => {
        const mega_byte = 1024 * 1024;
    
        if (getObjectResult.ContentLength > 1 * mega_byte) {
            log ( ' É um objeto grande. ');
            
            callback('Big Object');
        }
        else {
            log (' Objeto de tamanho normal. ')
            callback('Ok');
        }
    });
};