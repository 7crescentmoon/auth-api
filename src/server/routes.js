import express from 'express';
import { authenticateFirebaseToken } from "./middlewares/middware.js";
import {test} from "./handler.js"

const router = express.Router();

router.get("/", authenticateFirebaseToken, test)
// router.post("/register", register);

export default router;    