import './App.css';
import MainPage from './components/MainPage/MainPage';
import IntroPage from './components/IntroPage/IntroPage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const routes = [
  {
    Component: MainPage,
    key: 'MainPage',
    path: '/main'
  },
  {
    Component: CategoryPage,
    key: 'CategoryPage',
    path: '/category'
  },
  {
    Component: IntroPage,
    key: 'IntroPage',
    path: '/'
  }
]


function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(({Component, key, path}) => {
            return(
              <Route 
                  key={key}
                  path={path}
                  component={() => <Component page={key} />}
              />
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
