
const Movie = (props) => {
  return (
    
        <div className="w-72 flex justify-center shadow-md text-center rounded-md p-5 bg-black">
                <a href=""><img src={props.img} className="h-80"/>
                    <h1 className="text-2xl font-bold text-blue-800">{props.title}</h1>
                    <p className="text-2xl font-semibold">{props.year}</p>
                </a>
        </div>
        
    
  )
}

export default Movie
