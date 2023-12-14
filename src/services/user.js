export const registerUser = async (userInfo) => {
    let userRegistered = false;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userInfo),
            credentials: "include"
        }
        const response = await fetch("http://localhost:8080/auth/register", requestOptions);
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

export const loginUser = async (loginInfo) => {
    let logged = false;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(loginInfo),
            credentials: "include"
        }
        const response = await fetch("http://localhost:8080/auth/login", requestOptions);
        if(response.ok){
            logged = true;
        } else {
            throw new Error("Failed to login");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return logged;
    }
}