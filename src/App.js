import Amount from './components/amount/Amount';
import Produk from './components/product/Product';
import Diskon from './components/discount/discount';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='text-center mb-5'>SHOPPING CART</h1>
        <div className="container wrrap px-4">
          <div className="row gx-5">
            <div className="col">
              <Produk/>
            </div>
            <div className="col">
              <Amount/>
              <Diskon />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
