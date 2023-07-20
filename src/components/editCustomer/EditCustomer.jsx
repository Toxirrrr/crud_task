import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./EditCustomer.scss"

const EditCustomer = () => {
  const history = useHistory()
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setCompany(localStorage.getItem("company"));
      setEmail(localStorage.getItem("email"));
  }, [])
  const handleUpdate = (e) => {
      e.preventDefault()
      axios.put(
          `https://643bdfc144779455736244ba.mockapi.io/crud-youtubes/${id}`,
          {
            id: id,
            name: name,
            company: company,
            email: email
          }
      ).then(() => {
          alert("Do you want to update")
      })
      .then(() => {
        history.push("/readcustomer")
      })
  }
  return (
    <div className='edit__customer'>
        <div className='edit__customer__container'>
            <h3 className='edit__customer__heading'>Edit Customer</h3>

            <form className='edit__customer__form'>
                <div className='edit__customer__form__wrapper'>
                    <div>
                        <label className='edit__customer__form__label'>First Name</label>
                        <input className='form-control' onChange={(e) => setName(e.target.value)} value={name} type="text" />
                    </div>
                    <div>
                        <label className='edit__customer__form__label'>Last Name</label>
                        <input className='form-control' onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" />
                    </div>
                </div>
                <label className='edit__customer__form__label'>Company</label>
                <input className='form-control' onChange={(e) => setCompany(e.target.value)} value={company} type="text" />

                <div className='create__customer__btn__wrapper'>
                    <button className='customer__left__btn__1 active__customer__left__btn__1'>User</button>
                    <button className='customer__left__btn__2'>Administrator</button>
                </div>

                <label className='edit__customer__form__label'>Email</label>
                <input className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} type="email" />

                <button className='btn btn-primary' onClick={handleUpdate}>Save</button>
            </form>
        </div>
    </div>
  )
}

export default EditCustomer