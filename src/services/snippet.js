export const getSnippetById = async (snippetId) => {
    let snippet = null;
    try{
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/snippet/" + snippetId, requestOptions);
        if(response.ok){
            snippet = await response.json();
        } else {
            throw new Error("Falha ao busca snippet com id "+ snippetId);
        } 
    } catch(error){
        console.log("Erro:" + error);
    } finally {
        return snippet;
    }
}

export const saveSnippet = async (snippet) => {
    let snippetUpdated = false;
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(snippet),
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/snippet/" + snippet.id , requestOptions);
        if (response.ok){
            snippetUpdated = true;
        } else {
            throw new Error("Erro ao editar snippet");
        }
    } catch (error) {
        console.log("Erro: " + error);
    } finally {
        return snippetUpdated;
    }
}

export const createSnippet = async (snippet) => {
    let snippetCreated = null;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(snippet),
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/snippet" , requestOptions);
        if (response.ok){
            snippetCreated = await response.json();
        } else {
            throw new Error("Erro ao criar snippet");
        }
    } catch (error) {
        console.log("Error: " + error);
    } finally {
        return snippetCreated;
    }
}

export const deleteSnippet = async (snippetId) => {
    let snippetDeleted = false;
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'},
            body: "",
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/snippet/" + snippetId , requestOptions);
        if (response.ok){
            snippetDeleted = true;
        } else {
            throw new Error("Erro ao excluir snippet");
        }
    } catch (error) {
        console.log("Erro: " + error);
    } finally {
        return snippetDeleted;
    }
}

export const associateTagToSnippet = async (snippetId, tagId) => {
    let associated = false;
    try {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            credentials: 'include'
        }
        const response = await fetch(`http://localhost:8080/snippet/${snippetId}/addTag/${tagId}`, requestOptions);
        if(response.ok){
            associated = true;
        } else {
            throw new Error("Failed to associate tag to snippet");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return associated;
    }
}

export const disassociateTagToSnippet = async (snippetId, tagId) => {
    let disassociated = false;
    try {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            credentials: 'include'
        }
        const response = await fetch(`http://localhost:8080/snippet/${snippetId}/removeTag/${tagId}`, requestOptions);
        if(response.ok){
            disassociated = true;
        } else {
            throw new Error("Failed to disassociated tag to snippet");
        }
    } catch (error) {
        console.error(error);
    } finally {
        return disassociated;
    }
}

export const getFolderSnippets = async (folderId, filter="") => {
    let snippets = [];
    const requestOptions = {
        method: 'GET',
        credentials: 'include'
    }
    try{
        const response = await fetch(`http://localhost:8080/snippet/folder/${folderId}/?filtro=` + filter, requestOptions); //TODO: trocar a url da api para uma variavel global
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

export const getTagSnippets = async (tagId, filter="") => {
    let snippets = [];
    const requestOptions = {
        method: 'GET',
        credentials: 'include'
    }
    try{
        const response = await fetch(`http://localhost:8080/snippet/tag/${tagId}/?filtro=` + filter, requestOptions); //TODO: trocar a url da api para uma variavel global
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