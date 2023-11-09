import { useEffect, useState } from "react";
import { getTags } from "../../services/tag";

const Tags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            const tagsFetched = await getTags();
            setTags(tagsFetched);
        }
        fetchTags();
    }, [])

    return(
        <h1>Tags</h1>
    )
}

export default Tags;