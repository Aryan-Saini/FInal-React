import {useEffect, useState} from "react";
import Movie from "./Movie";
const API_KEY = "6c2e6bfe26bf676d45cb983b3db054f2";
export default function Top(props){
  const [data,setData] = useState([]);

  useEffect(() =>{
    let data = [[8,"Netflix"],[230,"Crave"],[337, "Disney"],[350, "Apple Plus"]];
    let itm = async () => {
      data = await Promise.all(data.map(async (id) => {
        let da = await fetch(`https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=${id[0]}&watch_region=CA&api_key=${API_KEY}`);
        da = await da.json();
        da.name = id[1];
        return da;
      }));
      setData([...data]);
    }
    itm();
  }, []);
  return(<>{data.map((service) => {
    return(
      <> 
      <div className="titleList">
        <div className="title">
          <h1>{service.name}</h1>
          <div className="titles-wrapper">
            {service.results.map((e) => <Movie data={e} key={e.id} tog={props.tog} list={props.list}/>)}
          </div>
        </div>
      </div>
      </>
    )
  })}</>);
}