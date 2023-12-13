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
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"tagId": tagId}),
            credentials: 'include'
        }
        const response = await fetch("http://localhost:8080/snippet/addTag/" + snippetId, requestOptions);
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