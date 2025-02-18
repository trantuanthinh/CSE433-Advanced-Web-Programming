import {useEffect, useMemo, useState} from "react";
import {fetchUserList} from "../../stimulate-api/stimulate-api";
import {UserType} from "../../types/UserType";

export default function FilterUser() {
    const [userList, setUserList] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [check, setCheck] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserList();
                setUserList(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = useMemo(() => {
        return userList.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [userList, search]);

    return (
        <div>
            <h1>User List</h1>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                type="checkbox"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
            />
            Additional Option
            {loading ? <p>Loading...</p> : (
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
