import {useEffect, useRef, useState} from "react";

export default function SearchBox() {
    const searchRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    return (
        <div className="p-6">
            <form className="mt-4 flex items-center space-x-2">
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border px-2 py-1 rounded w-full"
                />
                <button type="submit" className="bg-gray-700 hover:bg-gray-900 text-white px-3 py-1 rounded">
                    Submit
                </button>
            </form>

            <h2 className="text-lg font-bold mt-4">Search results:</h2>
        </div>
    );
}
