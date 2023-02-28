import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const formCollectionRef = collection(db, "digitaldekho");

interface AddFormProp {
  fName: string;
  lName: string;
  phNumber: string;
  email: string;
  service: Array<string>;
  city: string;
  state: string;
}

export const addForm = async ({
  fName,
  lName,
  email,
  phNumber,
  service,
  city,
  state,
}: AddFormProp) => {
  try {
    await addDoc(formCollectionRef, {
      fName: fName,
      lName: lName,
      phNumber: phNumber,
      email: email,
      service: service,
      city: city,
      state: state,
    });
  } catch (error: any) {
    throw error;
  }
};
