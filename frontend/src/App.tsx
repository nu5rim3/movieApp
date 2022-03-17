// routes
import Router from './routes';
// provider
import { Provider } from 'react-redux';
// store
import store from './store';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
