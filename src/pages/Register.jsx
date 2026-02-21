import Lottie from 'lottie-react';
import React, { use } from 'react';
// import registerLottie from '../assets/lottieanimation/register.json'
import { AuthContext } from '../context/AuthContext';


const Register = () => {
    const {createUser}=use(AuthContext)
    console.log(Lottie)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        // create User With email and password
        createUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   {/* <Lottie style={{width:'200px'}} animationData={registerLottie} loop={true} ></Lottie> */}
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
           <h1 className="text-5xl font-bold">Register now!</h1>
       <form onSubmit={handleSubmit}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;