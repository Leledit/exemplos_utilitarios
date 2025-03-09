/* eslint-disable @next/next/no-img-element */
import { Input } from "@mui/material";
import styles from "./index.module.scss";
import { compressImage, convertBlobToBase64 } from "@utils/asset";

interface Iprops {
  errorLegend?: boolean;
  legendValue?: string;
  setLegend?: any;
  setDataImage: (image: any) => void;
  dataImagem: any;
}

export default function BasicFormUpload({
  setDataImage,
  dataImagem,
}: Readonly<Iprops>) {
  return (
    <div className={styles.containerImage}>
      <div className={styles.image}>
        <Input
          type="file"
          required
          name={"file"}
          sx={{
            "& input": {
              padding: "10px",
              backgroundColor: "#f5f5f5",
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
          className={styles.input}
          onChange={async (e: any) => {
            const dataImage = await returnImageThatMustBeSent(
              e.target.files[0]
            );
            setDataImage(dataImage);
          }}
        />
        {dataImagem ? (
          <img
            src={`${dataImagem}`}
            alt="Imagem selecionada"
            className={styles.chosenImage}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  async function returnImageThatMustBeSent(image: File) {
    if (image instanceof File) {
      const compressedImage: any = await compressImage(image);
      const base64Image = await convertBlobToBase64(compressedImage);
      return base64Image;
    } else {
      return image;
    }
  }
}
