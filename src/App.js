import Home from './components/Home';
import './index.css';
import JobDescription from './components/JobDescription';
import Application from './components/Application';
import SuccessfulSubmit from './components/SuccessfulSubmit';
import ProtectedLogin from './components/ProtectedLogin';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRegister from './components/ProtectedRegister';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Redirect, Switch, Route} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import JobSeekers from './navComponents/JobSeekers';
import Employers from './navComponents/Employers';
import AboutUs from './navComponents/AboutUs';
import Resources from './navComponents/Resources'
import Footer from './components/Footer';
import Aboutpage from './navComponents/Aboutpage';
import Notification from './navComponents/Notification';

const store = createStore(rootReducer);

function App() {

  return (
    <Provider store={store}>
      <Router  >
        <Navbar />
        <Switch >
        
          <ProtectedLogin exact path="/login" component={Login}/>
          <ProtectedRegister exact path="/register" component={Register}/>
          <Route exact path="/" component={Login} />
          <ProtectedRoute  path="/jobs" component={Home}/>
          <ProtectedRoute exact path="/jobs/description" component={JobDescription}/>
          <ProtectedRoute exact path="/jobs/apply" component={Application}/>
          <ProtectedRoute exact path="/jobs/submit" component={SuccessfulSubmit}/> 
          {/* <Redirect to="/jobs"/> */}

          <Route path="/home" component={Home}/>
           {/* <Route path="/jobs/description" component={JobDescription}/>  */}
           {/* <Route path="/notification" component={Notification}></Route> */}
           <Route  path="/job-seekers" component={JobSeekers}/>
          <Route  path="/employers" component={Employers}/>
          <Route  path="/about-us" component={AboutUs}/>
          <Route  path="/Aboutpage" component={Aboutpage}></Route>
          <Route  path="/resources" component={Resources}/> 
        

        </Switch>
      </Router>
      <Footer/>
    </Provider>
   
  );
}

export default App;
