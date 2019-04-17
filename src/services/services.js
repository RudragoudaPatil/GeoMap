// import {db,firebaseApp} from './config';
import {firebaseApp} from './config';


export const registerUser = (userInfo) =>{
    // db.ref('/users').push(userInfo,err=>{
    //     console.log(err);
    // })
    firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    .catch(function (error){
        
        var errorCode = error.code;
        var errorMessage = error.message
    });
}

