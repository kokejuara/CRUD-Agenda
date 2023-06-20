import {v4 as uuid} from 'uuid'

let users = [];

export const getAgenda = (req, res) => {
    res.send(users);
}

export const newContact = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send(`User ${user.name} added to the database`);
}

export const getContact = (req, res) => {
    const singleContact = users.find((user) => user.id === req.params.id);
    res.send(singleContact)
}

export const deleteContact = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    
    res.send(`User with id ${req.params.id} deleted from the database`);
}

export const updateContact = (req, res) => {

    console.log("Cambiando datos")

    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.mail = req.body.mail;
    user.phone = req.body.phone;
    res.send(`User ${user.name} has been updated`);
}