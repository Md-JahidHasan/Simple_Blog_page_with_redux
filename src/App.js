import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        {/* <!-- navigation --> */}
        <Navigation></Navigation>

        {/* <!-- search --> */}
        <Search></Search>


        {/* <!-- search --> */}
        <Blogs></Blogs>

        {/* <!-- footer --> */}
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
