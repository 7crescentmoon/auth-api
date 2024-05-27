import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";

const app = initializeApp({
  credential: admin.credential.cert("serviceAccount.json"),
});

export const getsAuth = getAuth();
