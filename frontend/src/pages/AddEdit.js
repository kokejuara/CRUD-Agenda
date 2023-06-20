import { useState, useEffect } from "react";
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

const initState = {
    name: '',
    mail: '',
    phone: ''
}

const AddEdit = () => {

    const [state, setState] = useState(initState);
    const {name, mail, phone} = state;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if(id){
            getSingleContact(id)
        }

    }, [id])

    const getSingleContact = async (id) => {

        const response = await axios.get(`http://localhost:5000/agenda/contact/${id}`)
        if(response.status === 200){
            setState({...response.data})
        }  
    }

    const addContact = async (data ) => {

        let process = true;

        if(!data.name || !data.mail || !data.phone){ toast.error("There is an error with the data"); process = false; }
        if(data.mail.indexOf('@') === -1){ toast.error("The mail is not valid"); process = false; }
        if(data.phone.length < 9){ toast.error("The phone is not valid"); process = false; }
        if(isNaN(data.phone)){ toast.error("The phone is not valid"); process = false; }

        if(process){
            const response = await axios.post("http://localhost:5000/agenda/new", data)
            if(response.status === 200){
                toast.success(response.data)
                navigate('/')
            }
        }
        
    }

const updateContact = async (data) => {
    let process = true;

        if(!data.name || !data.mail || !data.phone){ toast.error("There is an error with the data"); process = false; }
        if(data.mail.indexOf('@') === -1){ toast.error("The mail is not valid"); process = false; }
        if(data.phone.length < 9){ toast.error("The phone is not valid"); process = false; }
        if(isNaN(data.phone)){ toast.error("The phone is not valid"); process = false; }

        if(process){

            console.log(data)
            const response = await axios.post(`http://localhost:5000/agenda/update/${data.id}`, data)
            if(response.status === 200){
                toast.success(response.data)
                navigate('/')
            }
        }
}

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!id) {
            addContact(state)
        }else{
            updateContact(state)
        }
    }

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return(
        <>
            <h2>Add contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={name} onChange={handleInputChange}/><br/>
                <label>Mail</label>
                <input type='text' name='mail' id='mail' value={mail} onChange={handleInputChange}/><br/>
                <label>Phone</label>
                <input type='text' name='phone' id='phone' value={phone} onChange={handleInputChange}/><br/>
                <button type='submit'>{id ? "Update" : "Add"}</button>
            </form>
        </>
    )

}

export default AddEdit;