import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice'; // Replace with the actual path to your usersSlice file

export default function Users() {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchUsers action creator when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]); // Add fetchUsers to the dependency array to trigger the effect only once

  if (isLoading === true) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    </div>
  );
}
