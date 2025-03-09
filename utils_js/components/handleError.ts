export function handleError(message: string, error: unknown): void {
  if (error instanceof Error) {
    console.log(`${message} ${error.message}`);
  } else {
    console.log(`${message} ${error}`);
  }
}
