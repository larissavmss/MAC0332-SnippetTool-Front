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