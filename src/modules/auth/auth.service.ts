import { LoginInput } from "./auth.schema.js";
import { generateToken } from "../../utils/jwt-token.js";
import { AppError } from "../../utils/app-error.js";

export async function login(input: LoginInput) {
  const { email, password } = input;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken();

  return { token };
}
