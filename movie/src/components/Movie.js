
const Movie = ({title, year, img}) => {
  return (
    <div className="w-72 h-80 mb-40">
      <div className="bg-black flex flex-col rounded-md">
        <img src={img} alt="" className="w-full h-80 rounded-md" />
        <div className="text-2xl p-4 text-white">
          <h1>Title:{ title}</h1>
          <h2>Year:{ year}</h2>
        </div>
      </div>
    </div>
  )
}

export default Movie
