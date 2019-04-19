import {firebaseApp} from './config';

export const registerUser = (userInfo)=>{
  
  return firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password)
}

export const loginUser = (userInfo)=>{
    return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);
}