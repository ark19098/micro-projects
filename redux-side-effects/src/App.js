import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

      const response = await fetch('https://gs://redux-and-async-85c4d.appspot.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }

      // const responseData = await response.json();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Seent cart data successfully!'
      }));
    }

    if (isInitial) {
      isInitial= false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }); 
    
  }, [cart, dispatch]);

  return (
    <>
      {notification && 
        <Notification 
          status={notification.status} 
          title={notification.title} 
          message={notification.message} 
        />}
      <Layout>
      {showCart && 
      <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;


/**
 * useSelector( state => state.cartIsVisible)

* we need to pass a function which receives the Redux state

* automatically because this function

* which we pass to useSelector will be executed by React Redux.

* And we should return the data which we wanna use.

* But for this we'll need to drill into that state slice

* and since I'm setting up a map of reducers in the index JS file in the store folder,

* we need to use this key (ui) to drill into that part of the state

 */

/**
 * To catch any errors that might be thrown from inside this function.
 * Since, sendCartData is a async function, it returns a promise, so we can call catch on it.
 * .catch(error) handles all kind of errors.
 */
