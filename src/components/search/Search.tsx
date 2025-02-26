import {useParams} from "react-router-dom";

export default function Search() {
    const {query} = useParams();

    return (
        <div>
            <h1>Search: {query}</h1>
        </div>
    );
}
