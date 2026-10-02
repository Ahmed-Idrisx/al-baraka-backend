import { NextFunction, Request, Response } from "express";

import { successResponse } from "../../utils/api-response.js";
import { login } from "./auth.service.js";
import { env } from "../../config/env.js";

export async function loginController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { token } = await login(req.body);

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return successResponse(res, "Login successful", []);
  } catch (error) {
    next(error);
  }
}

export function logout(_req: Request, res: Response) {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return successResponse(res, "Logged out successfully", []);
}
