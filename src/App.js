import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/useToken';
import {Route, Routes} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={
          <Main/>
        }/>
      </Routes>
    </>
  );
}

export default App;
