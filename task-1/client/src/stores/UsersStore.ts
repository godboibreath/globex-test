import { makeAutoObservable } from 'mobx';

interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
}

class UsersStore {
    private _users: User[] = [];
    private _memoSearch: string | null = null;
    constructor() {
        this._users = [];
        this._memoSearch = null;
        makeAutoObservable(this);
    }
    async request(search: string) {
        // todo rubtsov выделить в env
        try {
            this._memoSearch = search;
            const response = await fetch(`http://127.0.0.1:${import.meta.env.VITE_SERVER_PORT || 3000}?term=${search}`, {
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'GET',
            });
            const json = await response.json();
            this._users = ([...(json.data || [])] as User[]).map((item) => ({ ...item, phone: `+7 ${item.phone}` }));
        } catch (err) {
            console.log(err);
        }
    }

    get users() {
        return this._users;
    }
}

export default new UsersStore();
