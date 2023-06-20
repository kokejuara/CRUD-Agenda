import React, {useState} from 'react'
import axios from 'axios';
import './Home.css';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {

    
    const [contacts, setContacts] = useState([])

    const checkContacts = (map) =>{
        if(map.length === 0){
            return false
        }else{
            return true
        }
    }

    const getContacts = async () => {
        const response = await axios.get("http://localhost:5000/agenda/all")
        setContacts(response.data)
    }

    const deleteContact = async (id) => {
        if(window.confirm("Are you sure?")){
            const response = await axios.delete(`http://localhost:5000/agenda/delete/${id}`)
            if(response.status === 200){
                toast.success(response.data)
                getContacts()
            }
        }
    }

    getContacts()
    return(
        <>
        <h2>Home (My contacts)</h2>
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!checkContacts(contacts) ? "There is not contacts" : contacts.map((contact) => {
                    return(
                        <tr>
                            <td>{contact.name}</td>
                            <td>{contact.mail}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <Link to={`/update/${contact.id}`}>
                                    <button className='edit' onClick={()=>{}}>Edit</button>
                                </Link>
                                <button className='delete' onClick={()=>{deleteContact(contact.id);}}>Delete</button>
                                <Link to={`/view/${contact.id}`}>
                                    <button className='view' onClick={()=>{}}>View</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )

}

export default Home;