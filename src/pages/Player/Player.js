import React,{useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({name:"", key:"", published_at:"", type:""})
  const {id} = useParams()
  const navigate = useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY4MTRmODJlNjUyYTExNTkzY2M3Yjc2MmYzMDgzZSIsInN1YiI6IjY2M2M2MzdjZjY0N2ZlNzQ2MGYwYWExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.piKWlBq6tQRdYMZl5CB6fIXQVgsGHHtAHkP6FdZ_K3Y'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results.find(data=> data.type==="Trailer")))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className="player">
        <img src={back_arrow_icon} alt="" onClick={()=>navigate(-2)}/>
        <iframe height="90%" width="90%" frameborder="" allowFullScreen title="trailer" src={`https://www.youtube.com/embed/${apiData.key}`} ></iframe>
        <div className='player-info'>
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player