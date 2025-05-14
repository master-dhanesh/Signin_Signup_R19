const Users = (props) => {
    const { users, setusers } = props;

    const DeleteHandler = (id) => {
        const filterUsers = users.filter((user) => user.id != id);
        setusers(filterUsers);
    };

    const userrenders = users.map((user) => {
        return (
            <li
                key={user.id}
                className="mb-3 p-3 rounded bg-gray-700 w-full flex justify-between items-center"
            >
                <p>
                    <span className="font-thin text-2xl">{user.name}</span>{" "}
                    <br />
                    <small className="">{user.email}</small>
                </p>
                <button
                    onClick={() => DeleteHandler(user.id)}
                    className="text-red-400 text-sm"
                >
                    Delete
                </button>
            </li>
        );
    });

    return (
        <ul className="w-[30%] mt-10">
            <h1 className="text-5xl mb-10 font-thin">
                List Of Registered Users
            </h1>

            {users.length > 0 ? userrenders : "Data Not Found!"}
        </ul>
    );
};

export default Users;
