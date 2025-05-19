import { createContext, useState } from "react";
export const usercontext = createContext(null);
const DataContext = (props) => {
    const [users, setusers] = useState([]);
    const [toggler, settoggler] = useState(true);
    return (
        <usercontext.Provider value={{ users, setusers, toggler, settoggler }}>
            {props.children}
        </usercontext.Provider>
    );
};
export default DataContext;
