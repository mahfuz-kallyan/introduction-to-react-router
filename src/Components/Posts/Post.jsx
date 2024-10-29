import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate()
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }

    const handleDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post of Id: {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/ post / ${ id }`}>Post Details</Link>
            <Link to={`/ post / ${ id } `}><button>Show Details</button></Link>
            <button onClick={handleDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;