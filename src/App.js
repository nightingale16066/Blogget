import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/useToken';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
