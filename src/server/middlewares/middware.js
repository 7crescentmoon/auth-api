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
    console.log(userRecord);

    const user = {
      name: userRecord.displayName,
      email: userRecord.email,
      uid: userRecord.uid,
    };    
    await setUser(uid, user);

    next();
  } catch (error) {
    return res.status(401).send('Unauthorized: Invalid token')
  }
};