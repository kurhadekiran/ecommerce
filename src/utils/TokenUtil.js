export function isAuthenticated(){
    return (getToken() && getUser() && getUserId()) ? true : false;
}

export function getToken(){
    return localStorage.getItem("jwt");
}

export function getUser(){
    return localStorage.getItem("roles");
}

export function getUserId(){
    return localStorage.getItem("id");
}

export function logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("roles");
    localStorage.removeItem("id");
}