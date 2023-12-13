export const getAllFolders = async () => {
    let folders = [];
    try {
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/folder", requestOptions);
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
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({"name": foldername}),
            "credentials": 'include'
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

export const editFolder = async (folderName, folderId) => {
    let edited = false;
    try {
        const requestOptions = {
            "method": "put",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({"name": folderName}),
            "credentials": 'include'
        }
        const response = await fetch("http://localhost:8080/folder/" + folderId, requestOptions);
        if(response.ok){
            edited = true;
        } else {
            throw new Error("Failed to edit folder with id " + folderId);
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
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
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

export const getFolderById = async (folderId) => {
    let folder = {name: ""};
    try {
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/folder/"+folderId, requestOptions);
        if(response.ok){
            folder = await response.json();
        } else {
            throw new Error("Failed to fetch folder with id " + folderId);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return folder;
    }
}

export const getFolderByName = async (folderName) => {
    let folder = [{name: "", id: null}];
    try {
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/folder/filtro/"+folderName, requestOptions);
        if(response.ok){
            folder = await response.json();
        } else {
            throw new Error("Failed to fetch folder  " + folderName);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return folder;
    }
}

export const getUserSnippets = async (folderId, tagId = null) => {
    let snippets = [];
    const requestOptions = {
        method: 'GET',
        credentials: 'include'
    }
    try{
        const response = await fetch(`http://localhost:8080/folder/${folderId}/snippets` + (tagId? ("?tagId=" + tagId) : ""), requestOptions); //TODO: trocar a url da api para uma variavel global
        if(response.ok){
            snippets = await response.json();
        } else {
            throw new Error("Falha ao buscar snippets");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return snippets;
    }
}