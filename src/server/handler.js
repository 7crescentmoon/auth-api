import { db } from "./configs/firebase.js";
import { HTTPException } from "./utils/HTTPException.js"

export const setUser = async (uid, userData) => {
  try {
    await db.collection("users").doc(uid).set(userData);
  } catch (error) {
    console.error(error);
    next(new HTTPException(500, { message: "Internal server error" }));
  }
};

export const test = (req, res) => {
  res.send("Hello World!")
}


// export const register = async (req , res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userRecord = await getsAuth.createUser({
//       email: email,
//       password: password,
//       displayName: name,
//     });

//     const user = {
//       name: name,
//       email: email,
//       uid: userRecord.uid,
//     };

//     await setUser(userRecord.uid, user);

//     res
//       .status(201)
//       .send({ message: "User registered successfully", uid: userRecord.uid });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// }




