import { createContext, useState, useEffect, useContext } from "react";
import Text from '../data/Data'
import axios from "axios";
const Provide = createContext();

export const useProvide = () => useContext(Provide);
console.log(Text);

function ContextProvide({ children }) {
    const [navdata, SetNavdata] = useState('Choose')
    const [savedData, setSavedData] = useState(() => {
        return JSON.parse(localStorage.getItem("registrationData") || "{}");
    });

    useEffect(() => {
        localStorage.setItem("registrationData", JSON.stringify(savedData));
    }, [savedData]);
    // API
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/test-parts/')
            .then(res => {
                // Agar paginated bo'lsa results dan olish
                setTasks(res.data.results || res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Provide.Provider value={{ savedData, setSavedData, Text, navdata, SetNavdata, tasks }}>
            {children}
        </Provide.Provider>
    );
}

export default ContextProvide;
