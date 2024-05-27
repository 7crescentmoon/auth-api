import { getsAuth } from "../configs/firebase.js";

export const authenticateFirebaseToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("bearer ")[1];

  if (!idToken) {
    return res.status(401).send('Unauthorized: No token provided')
  }

  try {
    const decodedToken = await getsAuth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized: Invalid token')
  }
};