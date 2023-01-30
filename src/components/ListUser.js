import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { UsersContext } from './contexts/UserContextProvider'

const ListUser = () => {
    const { userList, deleteUser } = useContext(UsersContext)
    const delUser = (id) => {
        deleteUser(id);
    }
    return (
        <ListGroup className='mt-3'>
            {userList.map((user, index) => (<ListGroupItem className='d-flex' key={index}>
                <h4>{user.name}</h4>
                <div className='ms-auto'>
                    <Link to={`/edit/${user.id}`} className='btn btn-warning me-1'>Edit</Link>
                    <Button color='danger' onClick={() => delUser(user.id)}>Delete</Button>
                </div>
            </ListGroupItem>))}
        </ListGroup>
    )
}

export default ListUser
