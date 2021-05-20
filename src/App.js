import './reset.css';
import './style.css';
import {useState, useEffect} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Page from "./MoviePage"
import Header from './Header';
import Search from "./Search"
import Top from './Top';
import Watch from './Watch';

function App() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const itm = JSON.parse(localStorage.getItem("list")) || []; 
    setWatchList(itm);
  }, []);

  const checkWatchlist = (itm) => {
    const exitsing = watchList.find((e) => itm.id === e.id);
    if (exitsing) {
      setWatchList([...watchList.filter((e) => itm.id !== e.id)]);
    } else {
      setWatchList([...watchList, itm]);
    }

    localStorage.setItem("list", JSON.stringify(watchList));
  }
  return (
    <> 
    <Header />
    <Switch>
      <Route exact path="/">
        <Top tog={checkWatchlist} key={1} list={watchList}/>
      </Route>
      <Route exact path="/watchlist">
        <Watch tog={checkWatchlist}key={2} list={watchList}/>
      </Route>
      <Route exact path="/movies/:id">
        <Page tog={checkWatchlist} key={3} list={watchList} />
      </Route>
      <Route exact path="/search">
        <Search tog={checkWatchlist} key={4} list={watchList}/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
