// export function authHeader(isImage) {
//     // Return authorization header with jwt token
//     let user = JSON.parse(localStorage.getItem("userDetails"));
//     if (user && user.token) {
//     if (isImage != null && isImage) {
//     return {
//     Authorization: "Bearer " + user.token,
//     };
//     } else {
//     return {
//     "Content-Type": "application/json",
//     Authorization: user.token,
//     // Authorization: "Bearers " + user.token,
//     };
//     }
//     } else {
//     return {};
//     }
//     }
    

export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('token'));

    if (user && user.accessToken) {
        return { 'Authorization': 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}