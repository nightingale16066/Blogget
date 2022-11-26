import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';

export const Main = props => (
  <>
    <main className={style.main}>
      <Layout>
        <Tabs/>
        <List/>
      </Layout>
    </main>
  </>
);

