export function UserList({ users, delUser, openModal,changeJobStatus }) {
    return <ul>
            {users.map(({ id, name, email, avatar, hasJob })=>(
            <li key={id}>
                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>HasJob:{`${hasJob}`}</p>
                    <button onClick={() => delUser(id)}>Delete</button> 
                    <button onClick={() => openModal({ src: avatar, alt: name })}>Show avatar</button>    
                    <button onClick={()=>changeJobStatus(id)}>Change job status</button>
            </li>
            ))}
    </ul>
}