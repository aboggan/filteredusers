import React from 'react';
const UserSelect = (props) => {
    const { users } = props;
    if (!users || users.length === 0) return <p>No repos, sorry</p>;
    function handleOnFocus(params) {
        console.log(params)
    }
    function handleOnChange(params) {
        console.log(params)
    }
    function displaySuggestions() {
        return (
            <div>
                {users.filter(user => user.name.first.includes('M')).map(filteredPerson => (
                    <li>
                    {filteredPerson.name.first}
                    </li>
                ))}
                </div>
        )
    }

    return (
        <div>
            <h2 className='list-head'>search</h2>
            <input
                onFocus={(e) => {
                    handleOnFocus(e)
                }}
                onChange={(e) => {
                    handleOnChange(e)
                }}
                placeholder="onFocus is triggered when you click this input."
                />
                <displaySuggestions />
        </div>
    );
};
export default UserSelect;