import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const app = initializeApp({
  credential: admin.credential.cert("serviceAccount.json"),
});

export const getsAuth = getAuth();

export const db = getFirestore();