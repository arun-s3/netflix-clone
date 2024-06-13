import React,{useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title,category}) => {
  // const cardsRef = useRef(null);
  // console.log(cardsRef)

  // const wheelHandler = (e)=>{
  //   e.preventDefault();
  //   cardsRef.current.scrollLeft += e.deltaY
  // }
  // useEffect(()=>{
  //   cardsRef.current.addEventListener('wheel',wheelHandler)
  // },[])

  const [apiData, setApiData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY4MTRmODJlNjUyYTExNTkzY2M3Yjc2MmYzMDgzZSIsInN1YiI6IjY2M2M2MzdjZjY0N2ZlNzQ2MGYwYWExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.piKWlBq6tQRdYMZl5CB6fIXQVgsGHHtAHkP6FdZ_K3Y'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])
  
  // console.log("apidata--->"+ apiData.forEach(data=>console.log(data)))
  // console.log("apidata Reverse"+ apiData.reverse().forEach(data=>console.log(data)))
  return (
    <div className='title-cards'>
        <h2> {title? title:"Popular On Netflix"} </h2>
        <div className="card-list" >
          { 
            apiData.map((card,index)=>{
              return (<Link to={`/player/${card.id}`} key={index} className="card">
                        <img src={"https://image.tmdb.org/t/p/w500"+card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                      </Link>
                     )
            })
          }
        </div>
    </div>
  )
}

export default TitleCards