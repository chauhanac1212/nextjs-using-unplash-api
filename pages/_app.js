import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import {wrapper} from '../redux/Store'
import { useEffect } from 'react';


function MyApp({ Component, ...rest })
 {
  const {store, props} = wrapper.useWrappedStore(rest)
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return <><Provider store={store}>  <Component {...props.pageProps} /> </Provider>  </> 
  
 
}

export default MyApp