import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ReadCustomer.scss"
import editImg from "../../assets/images/edit.svg"
import trashImg from "../../assets/images/trash.svg"
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io"

const ReadCustomer = () => {
  const [data, setData] = useState([])
  function  getItem() {
      axios("https://643bdfc144779455736244ba.mockapi.io/crud-youtubes")
            .then(response => {
                setData(response.data)
            })
  }

  const hendleDelete = (id) => {
      axios.delete(
          `https://643bdfc144779455736244ba.mockapi.io/crud-youtubes/${id}`
      ).then(() => {
          alert("Do you want to delete")
      })
      .then(() => {
        getItem()
      })
  }

  const setToLocalStorage = ((id, name, lastName, company, email, password) => {
      localStorage.setItem("id", id)
      localStorage.setItem("name", name);
      localStorage.setItem("lastName", lastName)
      localStorage.setItem("company", company);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  })
  console.log(setToLocalStorage);
  useEffect(() => {
      getItem()
  },[])
  return (
    <div className='read__customer'>
        <div className='container'>
            <div className='read__customer__container'>
                <div className='read__customer__heading__wrapper'>
                    <h3 className='read__customer__heading'>Customers</h3>
                    <Link style={{textDecoration: "none"}} to="/">
                        <button className='read__customer__heading__btn'>
                            <IoMdAdd />
                            Add
                        </button>
                    </Link>
                </div>

                <table className='table' style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th className='read__customer__head'>Name</th>
                            <th className='read__customer__head'>Company</th>
                            <th className='read__customer__head'>Email</th>
                            <th className='read__customer__head'>Admin</th>
                            <th className='read__customer__head'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachItem) => {
                                return (
                                    <>
                                       <tr>
                                           <td className='read__customer__items'> 
                                                <div className='read__customer__name-wrapper'>
                                                  <p className='read__customer__items'>{eachItem.name}</p>
                                                </div>
                                           </td>
                                           <td className='read__customer__items'>{eachItem.company}</td>
                                           <td className='read__customer__items'>{eachItem.email}</td>
                                           <td className='read__customer__items'>
                                               <button className='btn btnss'></button>
                                           </td>
                                           <td className='read__customer__items'>
                                               <div className='read__customer__items__btn__wrapper'>
                                                    <Link to="/editcustomer">
                                                        <button className='read__customer__items__btn__edit' onClick={() => setToLocalStorage(
                                                            eachItem.id,
                                                            eachItem.name,
                                                            eachItem.lastName,
                                                            eachItem.company,
                                                            eachItem.email,
                                                            eachItem.password
                                                        )}>
                                                            <img src={editImg} alt="" />
                                                        </button>
                                                    </Link>
                                                    <button className='read__customer__items__btn__delete' onClick={() => hendleDelete(eachItem.id)}>
                                                        <img src={trashImg} alt="" />
                                                    </button>
                                               </div>
                                           </td>
                                       </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ReadCustomer