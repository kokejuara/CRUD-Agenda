import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const View = () => {

    const initState = {
        id: '',
        name: '',
        mail: '',
        phone: ''
    }

    const [state, setState] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            getSingleContact(id)
        }

    }, [id])

    const getSingleContact = async (id) => {

        if(id){
            const response = await axios.get(`http://localhost:5000/agenda/contact/${id}`)
            if(response.status === 200){
                setState({...response.data})
            }
        }

    }

    return(
        <>
        <h2>View User</h2>
        <span>ID: {id}</span>
        <br/>
        <span>Name: {state.name}</span>
        <br/>
        <span>Mail: {state.mail}</span>
        <br/>
        <span>Phone: {state.phone}</span>
        </>
    )

}

export default View;