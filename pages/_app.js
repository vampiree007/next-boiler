import AuthProvider from '../contexts/auth.context';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  // NOTE 1: AUTH PROVIDER IS AN CONTEXT THAT SERVES COMPONENTS ONLY WHEN USER IS AUTHENTICATED
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

// EXPORT DEFAULT APP COMPONENT;
export default MyApp;
