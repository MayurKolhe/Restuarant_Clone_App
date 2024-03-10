import { createContext } from "react";

const userDetailsContext = createContext({
    loggedInUser: "Default Context",
});

export default userDetailsContext