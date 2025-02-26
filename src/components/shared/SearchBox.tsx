import {useEffect, useRef, useState} from "react";
import {CiSearch} from "react-icons/ci";
import {useNavigate, useParams} from "react-router-dom";

export default function SearchBox() {
    const {query: urlQuery} = useParams<{query?: string;}>();
    const searchRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState(urlQuery || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (urlQuery !== query) {
            setQuery(urlQuery || "");
        }
    }, [urlQuery]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-3 py-2 w-full focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 flex items-center justify-center">
                    <CiSearch size={20} />
                </button>
            </form>
        </div>
    );
}
