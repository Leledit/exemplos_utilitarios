export async function getImageFitUploadStandards(image: File): Promise<string> {
  const compressedImage: any = await compressImage(image);
  const base64Image = await convertBlobToBase64(compressedImage);
  return base64Image;
}

import Compressor from "compressorjs";

export const compressImage = (file: File) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 1,
      mimeType: "image/png",
      success(result) {
        resolve(result);
      },
      error(error) {
        reject(error);
      },
    });
  });
};

export async function convertBlobToBase64(dataBlob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = (function (file) {
      return function () {
        const imageData = reader.result as string;
        if (imageData) {
          const imgBase64 = imageData.split(",")[1];
          resolve(imgBase64);
        }
      };
    })(dataBlob);
    reader.readAsDataURL(dataBlob);
  });
}


export function extractRelativePathFromImage(urlImage: string) {
    const partsUrl = urlImage.split("/");
    const url = partsUrl[partsUrl.length - 1];
  
    return url.replaceAll("%2F", "/");
  }
  