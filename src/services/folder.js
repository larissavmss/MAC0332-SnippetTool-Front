export const getAllFolders = async () => {
    let folders = [];
    try {
        const response = await fetch("http://localhost:8080/folder/getAllFolders");
        if(response.ok){
            folders = await response.json();
        } else {
            throw new Error("Failed to fetch folders");
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return folders;
    }
}

export const createNewFolder = async (foldername) => {
    let created = false;
    try {
        const requestOptions = {
            "method": "post",
            "header": {"Content-Type": "application/json"},
            "body": JSON.stringify({"name": foldername})
        }
        const response = await fetch("http://localhost:8080/folder", requestOptions);
        if(response.ok){
            created = true;
        } else {
            throw new Error("Failed to create new folder");
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return created;
    }
}

export const editFolder = async (folder) => {
    let edited = false;
    try {
        const requestOptions = {
            "method": "put",
            "header": {"Content-Type": "application/json"},
            "body": JSON.stringify({"name": folder.name})
        }
        const response = await fetch("http://localhost:8080/folder/" + folder.id, requestOptions);
        if(response.ok){
            edited = true;
        } else {
            throw new Error("Failed to edit folder with id " + folder.id);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return edited;
    }
}

export const deleteFolder = async (folderId) => {
    let removed = false;
    try {
        const requestOptions = {
            "method": "delete",
            "header": {"Content-Type": "application/json"},
            "body": ""
        }
        const response = await fetch("http://localhost:8080/folder/" + folderId, requestOptions);
        if(response.ok){
            removed = true;
        } else {
            throw new Error("Failed to remove folder with id " + folderId);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return removed;
    }
}


