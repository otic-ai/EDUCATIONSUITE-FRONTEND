import React from 'react'

function Register() {
  return (
    <div className='divform'>
      Create Account
      <form>
        <div className='fields'>
          <>
          <label>School name *</label>
          <input type='text' name='name' />
          </>

          <>
          <label>Contact Person *</label>
          <input type='text' name='contact' />
          </>
        </div>
        <div className='fields1'>
          <>
          <label>Address *</label>
          <input type='text' name='address' />
          </>
        </div>
        <div className='fields2'>
          <>
          <label>Country *</label>
          <input type='text' name='country' />
          </>

          <>
          <label>City *</label>
          <input type='text' name='city' />
          </>

          <>
          <label>State/Province *</label>
          <input type='text' name='state' />
          </>
  
          <>
          <label>Postal code *</label>
          <input type='number' name='code' />
          </>
        </div>
        <div className='fields'>
          <>
          <label>Email *</label>
          <input type='text' name='email' />
          </>

          <>
          <label>Phone Number *</label>
          <input type='number' name='phonenumber' />
          </>
        </div>
        <div className='fields'>
          <>
          <label>Mobile *</label>
          <input type='name' name='name' />
          </>

          <>
          <label>Fax *</label>
          <input type='name' name='name' />
          </>
        </div>
        <div className='fields1'>
          <>
          <label>Website Url *</label>
          <input type='name' name='name' />
          </>
          
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register