export const registerUser = async (userInfo) => {
    let userRegistered = false;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userInfo)
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
    let cookie = null;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(loginInfo)
        }
        const response = await fetch("http://localhost:8080/auth/login", requestOptions);
        if(response.ok){
            cookie = await response.json();
        } else {
            throw new Error("Failed to login");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return cookie;
    }
}