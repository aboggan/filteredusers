import React from 'react';
import UserDetail  from './UserDetail';
const List = (props) => {
  let users = props.users.map((user, i) => {
    return <UserDetail key={i} uid={user.login.uuid} name={user.name.first} last={user.name.last} src={user.picture.thumbnail} handleClick={props.handleClick}/>
  }) 

  return (
    <div>
      {users}
    </div>
  );
};
export default List;