import React , {useState , useEffect} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from  '../../firebase/firebase'

const Auth = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState(" ");
  

  const signin = async () => {
      await createUserWithEmailAndPassword(auth , email ,password )
  }
  useEffect(()=>{
    console.log(email);
    console.log(password)
  } , [email , password])
  const styles = {
    label : 'w-full text-white font-bold '
  }
  return (
    <div className="flex justify-center items-center">
    <div className="p-4 flex flex-col w-[400px] h-[400px] bg-gradient-to-br from-black to-gray-500">
      <label className={`${styles.label}`} htmlFor="email" > Email : </label>
      <input type="text" placeholder="enter email" 
      onChange = {(e : React.FormEvent<HTMLInputElement>)=>setEmail(e.currentTarget.value)}/>
      <label className={`${styles.label}`}  htmlFor="email" > Password: </label>
      <input type="text" placeholder="enter Password"
      onChange = {(e : React.FormEvent<HTMLInputElement>)=>setPassword(e.currentTarget.value)} />
      <button onClick={signin}>Sign In</button>
    </div>
    </div>
  )
}

export default Auth 