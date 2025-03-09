import { adapterArticlePutProjectDataWeb } from "@adapter/blog";
import { adapterPdfPutProjectData } from "@adapter/pdf";
import { adapterTemplateUpdate } from "@adapter/template";
import { IApiResponse } from "@interface/api";
import { applicationMode } from "@interface/editor";
import { Editor } from "grapesjs";

export default async function updateDataProjectGrapes(
  applicationMode: applicationMode,
  id: string,
  editor: Editor,
  currentPage: number
): Promise<IApiResponse<any>> {
  const projectData: any = editor.getProjectData();

  if (applicationMode === "pdf") {
    return await adapterPdfPutProjectData({
      idPdf: id,
      projectData: projectData,
      currentPage: currentPage,
    });
  }else if (applicationMode === "web") {
    return await adapterArticlePutProjectDataWeb({
      idArticle: id,
      projectData: projectData,
    });
  } else {
    return await adapterTemplateUpdate({
      idTemplate: id,
      projectData: projectData,
    });
  }
}
