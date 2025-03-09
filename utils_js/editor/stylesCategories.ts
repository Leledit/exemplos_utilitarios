export function stylesCategoriesNormalizeString(input: string): string {
    const words = input.trim().split(/\s+/);
  
    const allEqual = words.every(word => word === words[0]);
  
    return allEqual ? words[0] : input;
  }