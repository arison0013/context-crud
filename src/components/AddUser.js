import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { UsersContext } from './contexts/UserContextProvider'
import { v4 as uuidv4 } from 'uuid';



const AddUser = () => {

    const navigate = useNavigate();

    const { addUser } = useContext(UsersContext);
    const [name, setName] = useState({
        id: uuidv4(),
        name: "",

    })

    const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        addUser(name.name)
        navigate('/');
    }
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' placeholder='Name' name='name' value={name.name} onChange={(e) => handleChange(e)}></Input>
                </FormGroup>
            </Form>
            <Button onClick={submit}>Add</Button>
            <Link to='/' className="btn btn-danger ms-1">Cancel</Link>
        </div>
    )
}

export default AddUser
