import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase/app";

import { map } from 'rxjs/operators';
//import { map,Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  registerUser(email: string, password: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmail(email: string, password: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  getAuth(){
    //return this.afAuth.authState.map( auth => auth);
    return this.afAuth.authState;
  }



  logout(){
    return this.afAuth.auth.signOut();
  }


}
