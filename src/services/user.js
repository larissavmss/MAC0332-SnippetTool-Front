export const registerUser = async (userInfo) => {
    let userRegistered = false;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userInfo)
        }
        const response = await fetch("http://localhost:8080/user", requestOptions);
        if(response.ok){
            userRegistered = true;
        } else {
            throw new Error("Failed to create user");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return userRegistered;
    }
}

export const login = (loginInfo) => {
    let user = null;
    try {
        const response = await fetch("http://localhost:8080/user")
    }
}