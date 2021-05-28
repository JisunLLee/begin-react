import React, { useContext } from 'react';
import { UserDispatch } from './App'

const User = React.memo(function User({ user }) {
    const dispathch = useContext(UserDispatch);
    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={()=> {
                    dispathch({ type: 'TOGGLE_USER', id : user.id })
                }}
                >
                    {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick = {() => {
                dispathch({ type: 'REMOVE_USER', id: user.id })
            }}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User 
                user = {user} 
                key = {user.id} />
            ))}
        </div>
    )
}

export default React.memo(UserList);