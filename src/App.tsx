import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserProvider from './providers/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
    <Router />
    <ToastContainer
      position='bottom-right'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ width: "19.6875rem", margin: "1.25rem" }}
    />
    </UserProvider>
  </>
);

export default App;
