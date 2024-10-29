import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userstyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return (
        <div style={userstyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;