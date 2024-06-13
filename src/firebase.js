
import {createContext} from 'react'
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from "firebase/firestore"
import {getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {toast} from 'react-toastify'


const firebaseConfig = {
  apiKey: "AIzaSyB8k8fjmseaYG3cBH3lgvqxiVikuYUEQa0",
  authDomain: "netflix-clone-58204.firebaseapp.com",
  projectId: "netflix-clone-58204",
  storageBucket: "netflix-clone-58204.appspot.com",
  messagingSenderId: "629953676918",
  appId: "1:629953676918:web:5a9b5a598ddfeb1277c157"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,"user"), {
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth, db, signup,login, logout}