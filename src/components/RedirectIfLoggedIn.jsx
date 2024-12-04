import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtil";
import { getUser } from './../utils/TokenUtil';

export function RedirectIfLoggedIn({children}){  
    if (isAuthenticated()) {
        return <Navigate to="/viewalltransaction" ></Navigate>
    } else {
        // return props.children;
        return children;

    }
// export function RedirectIfLoggedIn({props}){  
//     if (isAuthenticated()) {
//         return <Navigate to="/viewalltransaction" ></Navigate>
//     } else {
//         // return props.children;
//         return props.children;

//     }
}
