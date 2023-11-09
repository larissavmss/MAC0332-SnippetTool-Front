export const getUserSnippets = async (userId) => {
    let snippets = [];
    try{
        const response = await fetch("http://localhost:8080/snippet/getAllSnippets/"+ userId); //TODO: trocar a url da api para uma variavel global
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

export const getSnippetById = async (snippetId) => {
    let snippet = null;
    try{
        const response = await fetch("http://localhost:8080/snippet/" + snippetId);
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

export const updateSnippet = async (snippet) => {
    let snippetUpdated = null;
    try {
        const requestOptions = {
            method: 'UPDATE',
            header: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(snippet)
        }
        const response = await fetch("http://localhost:8080/snippet", requestOptions);
        if (response.ok){
            snippetUpdated = await response.json();
        } else {
            throw new Error("Erro ao editar snippet");
        }
    } catch (error) {
        console.log("Erro: " + error);
    } finally {
        return snippetUpdated;
    }
}