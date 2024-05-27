import { getsAuth } from "../configs/firebase.js";
import { setUser } from "../handler.js"

export const authenticateFirebaseToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("bearer ")[1];

  if (!idToken) {
    return res.status(401).send('Unauthorized: No token provided')
  }

  try {
    const decodedToken = await getsAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    req.user = decodedToken;
    const userRecord = await getsAuth.getUser(uid)

    const user = {
      name: userRecord.displayName,
      identifier: userRecord.email,
      uid: userRecord.uid,
    };    
    // console.log(userRecord);
    await setUser(uid, user);

    next();
  } catch (error) {
    return res.status(401).send('Unauthorized: Invalid token')
  }
};