import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtil";

export function PrivateRoute({children}){   
    console.log(isAuthenticated());
    if (isAuthenticated()) {
        // return props.children;
        return children;
    } else {
       return <Navigate to="/error"></Navigate>
    }

    // console.log(isAuthenticated());

    // if (isAuthenticated()) {
    //     // return props.children;
    //     return props.children;
    // } else {
    //    return <Navigate to="/"></Navigate>
    // }
}