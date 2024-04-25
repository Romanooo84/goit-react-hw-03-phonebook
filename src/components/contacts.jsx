export const Contacts = ({ userData, onDelete}) => {
    let usersList
    let letters = (userData.filter)
    let users
    if (userData.filter!=='') {
        const filtredData = userData.contacts.filter(contact =>
            contact.name.toLowerCase().includes(letters.toLowerCase())
        )
        users = filtredData
    }
    else {
        users = userData.contacts
    }
        
    usersList = users.map((user, index) => (
        <div key={user.id}>
        <li >{user.name}: {user.number}</li>
            <button id={user.id} onClick={onDelete} type='button'>Delete</button>
         </div>
        ));
    

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
}