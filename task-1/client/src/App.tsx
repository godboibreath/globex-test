import { observer } from 'mobx-react';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Layout from './components/Layout';
import Search from './components/Search';
import UsersStore from './stores/UsersStore';
import { useEffect } from 'react';

const AppObserver = observer(function ({ usersStore }: { usersStore: typeof UsersStore }) {
    useEffect(() => {
        usersStore.request('');
    }, []);
    return (
        <Layout>
            <Search />
            <CardContainer>
                {usersStore.users.map(({ id, name, phone, email }) => (
                    <Card key={id} name={name} phone={phone} email={email} />
                ))}
            </CardContainer>
        </Layout>
    );
});

function App() {
    return <AppObserver usersStore={UsersStore} />;
}

export default App;
