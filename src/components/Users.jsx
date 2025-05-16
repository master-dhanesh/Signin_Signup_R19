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
            <h2
                style={{
                    marginTop: "5px",
                    fontSize: "50px",
                    fontWeight: "lighter",
                    lineHeight: "50px",
                    marginBottom: "20px",
                }}
            >
                List Of Registered Users
            </h2>

            {users.length > 0 ? userrenders : <h1>Data Not Found!</h1>}
        </ul>
    );
};

export default Users;
