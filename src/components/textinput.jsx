export const TextInput = ({ onChange, onSubmit, value}) => {
    console.log(value)
    return (
    <div>  
        <p>Contacts</p>
        <form onSubmit={onSubmit}> 
            <p>Name</p>    
                    <input
                    type="text"
                    name="name"
                    value={value}
                    id='id'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onChange}
                    />
                <button type='submit'>Add Contact</button>
            </form> 
    </div>
    )
}