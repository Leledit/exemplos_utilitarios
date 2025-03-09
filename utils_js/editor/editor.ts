import { Editor, Page } from "grapesjs";

export function returnTheNameAllPages(editor: Editor): string[] {
    const allPages: Page[] = editor.Pages.getAll();

    return allPages.map((page) => {
        return page.getName();
    });
}

export function returnPositionSelectedPage(editor: Editor): number {
    let indexPage = 0;
    const allPages = editor.Pages.getAll();
    const curretPage = editor.Pages.getSelected();
    if (curretPage) {
        indexPage = allPages.findIndex(item => item.id === curretPage.id);
    }

    return indexPage
}


export function selectFirstComponentTree(editor: Editor, component?: any): void {
    if (component) {
        editor.select(component);
    } else {
        const components = editor.getComponents().models;
        if (components.length > 0) {
            editor.select(components[0]);
        }
    }
}