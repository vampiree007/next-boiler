import React, { useEffect, useState, useContext, createContext } from "react";

// USER PLACEHOLDER: REMOVE WITH API DATA WHILE WORKING
const user = {
    name: 'John Doe',
    role: 'moderator',
    email: 'johndoe@clixlogix.net'
}

// INITIALIZE 1: CREATE AUTH CONTEXT
const AuthContext = createContext();

// CONTEXT WRAPPER: PROVIDES AUTH
function AuthProvider({ children }) {
    // INITIALIZE 2: DEFINE STATES

    const [active, setActive] = useState(false);

    // SETS USER WHEN ACTIVE USER IS DETECTED
    useEffect(() => {
        setActive(() => !active)
    }, []);

    // IF NO USER REDIRECT TO LOGIN PAGE
    // to be uncommented when want to ensure user should not leave login page if not authorised
    if (!active) return <div>Loading.. .</div>

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);

// EXPORT CONTEXT
export default AuthProvider;
