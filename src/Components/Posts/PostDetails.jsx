import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const {postId} = useParams();
    const handleGoBack = () => {
        navigate(-1);
    }
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, body } = post;
    return (
        <div>
            <h3>Post Details About: {id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;