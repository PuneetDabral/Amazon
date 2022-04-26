import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sign_in = () => {
  
  const [logdata,setData]=useState({
    email:'',
    password:''
  })
  console.log(logdata)

  console.log(logdata)
  const adddata =(e)=>{
   const  {name,value}=e.target;

   setData(()=>{
      return{
        ...logdata,
        [name]:value
      }
   })
  }
  
  // first chnage the sate using setdata then show s that value on form using logdata

  const sendData =async(e)=>{
    e.preventDefault();

  const {  email, password } = logdata;
  try {
      const res = await fetch("/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email, password
          })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
          toast.error("Invalid Details 👎!", {
              position: "top-center"
          });
      } else {
          setData({
              ...logdata, email: "",
               password: ""
          });
          toast.success("Login Successfully done 😃!", {
              position: "top-center"
          });
      }
  } catch (error) {
      console.log("front end ka catch error hai" + error.message);
  }

  }


  return (
  
   <section>
     <div className="sign_container">
       <div className='sign_header'>
         <img src='./blacklogoamazon.png' alt='logo' />
       </div>
       <div className='sign_form'>
         <form method='POST'>
           <h1>Sign-In</h1>

           <div className='form_data'>
             <label htmlFor='email'>Email</label>
             <input type='text'
             onChange={adddata}
             value={logdata.email}
              name='email' id='email' />
           </div>
           <div className='form_data'>
             <label htmlFor=''>Password</label>
             <input type='password' name='password'
              onChange={adddata}
              value={logdata.password}
              placeholder='At least 6 char' id='password' />
           </div>
           <button className='signin_btn' onClick={sendData}>Continue</button>
         </form>
       </div>
       <ToastContainer />
       <div className='create_accountinfo'>
         <p>New To Amazon</p>
        <NavLink to='/register'> <button>Create Your amzon account</button></NavLink>
       </div>
     </div>
   </section>
  )
}

export default Sign_in