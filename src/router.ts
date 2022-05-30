import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { CreateRankingController } from "./controllers/CreateRankingController";
import { GetTopFiveRankingController } from "./controllers/GetTopFiveRankingController";
import { GetUserRankingController } from "./controllers/GetUserRankingController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

router.get("/ranking", new GetTopFiveRankingController().handle);
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
