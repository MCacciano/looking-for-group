import PropTypes from 'prop-types';
import UserItem from './UserItem';

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </ul>
    );
};

UserList.defaultProps = {
    users: [],
};

UserList.propTypes = {
    users: PropTypes.array,
};

export default UserList;
