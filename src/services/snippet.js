export const getUserSnippets = async (userId) => {
    let snippets = [];
    try{
        const response = await fetch("http://localhost:8080/snippet/getByUser/"+ userId); //TODO: trocar a url da api para uma variavel global
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