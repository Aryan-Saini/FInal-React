import { Link } from "react-router-dom";

export default function Movie(props){ 
  let showWatched = props.list.find((i) => props.data.id === i.id);
  let img =`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
  if (props.data.poster_path === null) {
    img = `img.jpg`;
  }
  return(            
  <div className="movie">
  <Link to={`/movies/${props.data.id}`}
    ><img
      src={img}
      alt="Movie poster"
    />
    <div className="overlay">
      <div className="title">{props.data.name}</div>
      <div className="rating">{`${props.data.vote_average}/10`}</div>
      <div className="plot">
        {props.data.overview}
      </div>
    </div>
    </Link>
  <div onClick={() => {props.tog(props.data)}} data-toggled={showWatched===undefined?"false":"true"} className="listToggle">
    <div>
      <i className="fa fa-fw fa-plus"></i
      ><i className="fa fa-fw fa-check"></i>
    </div>
  </div>
</div>)
}