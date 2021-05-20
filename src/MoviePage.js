import { useParams } from 'react-router-dom';
import React, { useEffect , useState} from 'react';
const API_KEY = "6c2e6bfe26bf676d45cb983b3db054f2";

export default function Page(props){
  const { id } = useParams({});
  const [data, setData] = useState({});
  let showWatched;
  useEffect(() => {
    const getSearchData = async() => {
      let data = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
      data = await data.json();
      setData(data);
    }
    getSearchData();
  }, [])

  showWatched = props.list.find((i) => data.id === i.id);
  if (showWatched === undefined) {
    showWatched = <button onClick={() => props.tog(data)} className="add-to-watchlist">+ Add to watch list</button>;
  } else {
    showWatched = <button onClick={() => props.tog(data)} className="remove-to-watchlist">- Remove from watch list</button>;
  }
 

  return(
  <> 
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
      <div className="show-details-inner">
        <h1>{data.name}</h1>
        <div className="description">
          {data.overview}
        </div>
        {showWatched}
      </div>
    </div>
  </>
  )
}
