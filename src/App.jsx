import { useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Users from "./components/Users";

const App = () => {
    const [users, setusers] = useState([]);

    const [toggler, settoggler] = useState(true);

    console.log(users);

    return (
        <div className="flex w-screen h-screen p-10 bg-gray-800 text-white">
            <div className="w-[70%]">
                {toggler ? (
                    <Signup
                        toggler={toggler}
                        settoggler={settoggler}
                        users={users}
                        setusers={setusers}
                    />
                ) : (
                    <Signin
                        toggler={toggler}
                        settoggler={settoggler}
                        users={users}
                        setusers={setusers}
                    />
                )}
            </div>
            <Users users={users} setusers={setusers} />
        </div>
    );
};

export default App;
