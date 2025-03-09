export default function extractParametersUrl(url: string, name: string) {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get(name);
  }
  