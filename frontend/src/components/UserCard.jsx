import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ idx, user }) => {
    // Initialize the navigate function
    const navigate = useNavigate();

    // Functions
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.01:8000/user/${user.user_name}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                navigate('/');
            } else {
                const errorData = await response.json();
                throw new Error('Something went wrong, not able to delete!\n' + errorData.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="user-display-format">
            <Link to={`/fetchUser/${user.user_name}`}>
                <h3>{user.user_name}</h3>
            </Link>
            <p>Email: {user.email}</p>
            <div className="rating">{idx + 1}</div>
            <div className="buttons">
                <Link to={`/updateUser/${user.user_name}`}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className='material-icons' onClick={handleDelete}>delete</i>
            </div>
        </div>
    );
}

export default UserCard;