import { Editor } from "grapesjs";

export async function addImageInComponent(url: string, editor: Editor) {
  const selectedComponent = editor.getSelected();

  if (selectedComponent) {
    const tagNameComponent = selectedComponent.attributes.tagName;
    if (tagNameComponent === "img") {
      selectedComponent.set({
        src: url,
      });
      selectedComponent.addStyle({
        width: "200px",
        height: "200px",
      });
    } else if (tagNameComponent !== "table" && tagNameComponent !== "p") {
      // Atualizar o estilo do componente
      const currentStyle = selectedComponent.getStyle();
      const newStyle = {
        ...currentStyle,
        "background-image": `url("${url}")`,
        "background-repeat": currentStyle["background-repeat"] || "no-repeat",
        "background-position":
          currentStyle["background-position"] || "center center",
        "background-size": currentStyle["background-size"] || "cover",
      };

      selectedComponent.setStyle(newStyle);
    }

    // Atualizar a visualização
    const preview = document.getElementById("gjs-sm-preview-box");
    const previewFile = document.getElementById("gjs-sm-preview-file");
    if (preview) {
      preview.style.display = "block";
    }
    if (previewFile) {
      previewFile.style.backgroundImage = `url("${url}")`;
    }
  }
}
