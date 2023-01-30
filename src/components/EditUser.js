import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { UsersContext } from './contexts/UserContextProvider'
import { useParams, useNavigate } from 'react-router-dom';
const EditUser = () => {
    let param = useParams();
    const navigate = useNavigate();
    const { userList, editUser } = useContext(UsersContext);
    const [SelectedUser, setSelectedUser] = useState({
        id: "",
        name: ""
    })
    const handleChange = (e) => {
        setSelectedUser({ ...SelectedUser, [e.target.name]: e.target.value })
    }
    const update = (name, id) => {
        editUser(name, id)
        navigate('/');
    }
    useEffect(() => {
        const currentId = param.id
        const slectedUser = userList.find(user => user.id == currentId)
        setSelectedUser(slectedUser)
    }, [param.id, userList])
    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' placeholder='Name' name='name' value={SelectedUser.name} onChange={(e) => handleChange(e)} ></Input>
                </FormGroup>
            </Form>
            <Button onClick={() => update(SelectedUser.name, SelectedUser.id)}>Update</Button>
            <Link to='/' className="btn btn-danger ml-5">Cancel</Link>
        </>
    )
}

export default EditUser
