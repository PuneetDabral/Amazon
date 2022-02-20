import React from 'react'

const SignUp = () => {
  return (
    <section>
    <div className="sign_container">
      <div className='sign_header'>
        <img src='./blacklogoamazon.png' alt='logo' />
      </div>
      <div className='sign_form'>
        <form>
          <h1>Sign-In</h1>

          <div className='form_data'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>
          <div className='form_data'>
            <label htmlFor=''>Password</label>
            <input type='password' name='password' placeholder='At least 6 char' id='password' />
          </div>
          <button className='signin_btn'>Continue</button>
        </form>
      </div>
      <div className='create_accountinfo'>
        <p>New To Amazon</p>
        <button>Create Your amzon account</button>
      </div>
    </div>
  </section>
  )
}

export default SignUp