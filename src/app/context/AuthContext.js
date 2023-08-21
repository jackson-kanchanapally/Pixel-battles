import {useContext,createContext,useState,useEffect} from 'react';
import { signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase'

const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [user,setUser]=useState(null)
 
   
    const SignInWithEmail=(email,password)=>{
        
        signInWithEmailAndPassword(auth,email,password)
    }
    const courseSetter=(co)=>{
        setCoursee(co)
    }
    const logOut=()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[user])
    return(
        <AuthContext.Provider value={{user,logOut,SignInWithEmail,courseSetter}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}