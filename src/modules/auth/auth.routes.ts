import { Router } from "express";

import { loginController, logout } from "./auth.controller.js";
import { loginSchema } from "./auth.schema.js";
import { validateRequest } from "../../middlewares/validate.request.js";

const router = Router();

router.post("/login", validateRequest(loginSchema), loginController);

router.post("/logout", logout);

export default router;
