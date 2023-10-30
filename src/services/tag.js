export const createNewTag = async (tag) => {
    let snippetCreated = null;
    try {
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tag)
        };
        const response = fetch("http://localhost:8080/tag", requestOptions);
        if(response.ok){
            snippetCreated = await response.json();
        } else {    
            throw new Error("Falha ao criar tag");
        }
    } catch (error) {
        console.log("Error: " + error);
    } finally {
        return snippetCreated;
    }
}