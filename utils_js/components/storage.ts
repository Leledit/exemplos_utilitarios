export function cleanFileUrlInBucket(url:string){
    const urlFull = url.split("wokplace_blog");
    const urlBase = urlFull[1].split("/");
    return urlBase[1];
}