import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./CreateCustomer.scss"

const CreateCustomer = () => {
  const history = useHistory() 
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const header = {"Access-Control-Allow-Origin" : "*"}

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("https://643bdfc144779455736244ba.mockapi.io/crud-youtubes", {
        name: name,
        lastName: lastName,
        company: company,
        email: email,
        password: password,
        header
    })
    .then(() => {
        history.push("/readcustomer")
    })
  }
  return (
    <div className='create__customer'>
        <div className='container'>
            <div className='create__customer__container'>
                <div className='create__customer__wrapper'>
                    <h3 className='create__customer__heading'>Add Customer</h3>

                    <form className='create__customer__form' onSubmit={handleSubmit}>
                        <div className='create__customer__label__wrapper'>
                            <div>
                                <label className='create__customer__label'>First Name</label>
                                <input className='form-control' onChange={(e) => setName(e.target.value)} required type="text" />
                            </div>

                            <div>
                                <label className='create__customer__label'>Last Name</label>
                                <input className='form-control' onChange={(e) => setLastName(e.target.value)} type="text" />
                            </div>
                        </div>

                        <label className='create__customer__label'>Company</label>
                        <input className='form-control' onChange={(e) => setCompany(e.target.value)} required type="text" />

                        <div className='create__customer__btn__wrapper'>
                            <button className='customer__left__btn__1 active__customer__left__btn__1'>User</button>
                            <button className='customer__left__btn__2'>Administrator</button>
                        </div>

                        <label className='create__customer__label'>Email</label>
                        <input className='form-control' onChange={(e) => setEmail(e.target.value)} required type="email" />
                        
                        <label className='create__customer__label'>Password</label>
                        <input className='form-control' onChange={(e) => setPassword(e.target.value)} required type="password" />
                        
                        <button className='btn btn-primary create__customer__btn' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCustomer