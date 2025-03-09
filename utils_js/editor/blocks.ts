
import { IBasicBlocks } from "@interface/grapesJs";
import { Editor } from "grapesjs";

export default function generateDraggableGrapesBlocks(
  editor: Editor,
  blocks: IBasicBlocks[],
  category: any
) {
  blocks.forEach((block) => {
    editor.BlockManager.add(block.id, {
      label: block.label,
      category: category,
      media: `<div id="${block.media}"/>`,
      content: {
        type: block.contentType,
        content: block.content,
      },
    });
  });
}
