'use server';
import bcrypt from "bcrypt";

export async function generateHashedPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function verifyPassword(plainPassword:any, hashedPassword:any) {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match;
}