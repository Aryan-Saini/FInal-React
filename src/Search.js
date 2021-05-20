import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Movie from "./Movie";
const API_KEY = "6c2e6bfe26bf676d45cb983b3db054f2";

export default function Search(props){
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  useEffect(() => {
    const getSearchData = async() => {
      let data = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${API_KEY}`)
      data = await data.json();
      setData(data.results);
    }
    getSearchData();
  }, [query])

  return (
    <>
      <div className="titleList">
        <div className="title">
          <h1>Results</h1>
          <div className="titles-wrapper">
            {data.map((e) => <Movie data={e} key={e.id} tog={props.tog} list={props.list}/>)}
          </div>
        </div>
      </div>
    </>
  );
}