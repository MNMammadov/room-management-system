import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './modules/components/Header';
import RoomDetails from './modules/components/RoomsPlan';
import RoomsPlan from './modules/components/RoomsPlan';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={RoomsPlan} exact />
        <Route path="/room/:roomId" component={RoomDetails} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;