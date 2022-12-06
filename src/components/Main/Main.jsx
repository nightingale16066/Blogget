import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {StartPage} from './StartPage/StartPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/auth' element={<StartPage/>}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
        <Route path='*' element={<StartPage welcome={false}/>}/>
      </Routes>
    </Layout>
  </main>
);
