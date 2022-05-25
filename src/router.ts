import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { CreateRankingController } from "./controllers/CreateRankingController";
import { ensureAuthenticade } from "./middleware/ensureAuthenticade";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.get("/profile", ensureAuthenticade, new ProfileUserController().handle);
router.post(
  "/ranking",
  ensureAuthenticade,
  new CreateRankingController().handle
);

export { router };
