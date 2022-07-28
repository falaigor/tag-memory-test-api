import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { CreateRankingController } from "./controllers/CreateRankingController";
import { GetRankingController } from "./controllers/GetRankingController";
import { GetUserRankingController } from "./controllers/GetUserRankingController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

router.get("/ranking", new GetRankingController().handle);
router.post(
  "/ranking",
  ensureAuthenticate,
  new CreateRankingController().handle
);

router.get(
  "/user-ranking",
  ensureAuthenticate,
  new GetUserRankingController().handle
);

export { router };
