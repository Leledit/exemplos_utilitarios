import { IFormSelectOptions } from "@components/basic/form/select";
import { ICategory } from "@interface/category";

export function returnCategoriesSelectPattern(
  allCategory: ICategory[]
): IFormSelectOptions[] {
  const options: IFormSelectOptions[] = [];
  allCategory.forEach((category) => {
    options.push({
      label: category.label,
      value: category._id,
    });
  });
  return options;
}
