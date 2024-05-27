import { db } from "./configs/firebase.js";

export const setUser = async (uid, userData) => {
  try {
    await db.collection("users").doc(uid).set(userData);
  } catch (error) {
    console.error(error);
    throw new HTTPException(500, { message: "Internal server error" });
  }
};

