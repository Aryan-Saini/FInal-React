import Movie from "./Movie";
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
const API_KEY = "6c2e6bfe26bf676d45cb983b3db054f2";

export default function Watch(props){
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
      const getSearchData = async() => {
        let data = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
        data = await data.json();
        setData(data.results);
      }
      getSearchData();
  }, []);
  return(
    <> 
    <div className="titleList">
      <div className="title">
        <h1>My Watch List</h1>
        <div className="titles-wrapper">
          {props.list.map((e) => <Movie data={e} key={e.id} tog={props.tog} list={props.list}/>)}
        </div>
      </div>
    </div>
    </>
  )
}