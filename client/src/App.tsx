import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Layout from './components/Layout';
import Search from './components/Search';

function App() {
    return (
        <Layout>
            <Search />
            <CardContainer>
                <Card name="Евгения Савченко" phone="+7 (918) 078-17-05" email="yysavchenk@mail.ru" />
                <Card name="Евгения Савченко" phone="+7 (918) 078-17-05" email="yysavchenk@mail.ru" />
                <Card name="Евгения Савченко" phone="+7 (918) 078-17-05" email="yysavchenk@mail.ru" />
                <Card name="Евгения Савченко" phone="+7 (918) 078-17-05" email="yysavchenk@mail.ru" />
            </CardContainer>
        </Layout>
    );
}

export default App;
