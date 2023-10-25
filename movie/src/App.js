import Movie from "./components/Movie";
import MoviesList from './movie.json'

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline text-red-800 text-center">
        MOVIE APP
      </h1>
      <div className="w-full mt-10 px-20 flex flex-wrap justify-center gap-5 py-10">
        
        {MoviesList.map((element) => {
          return (
            <Movie
            title={element.Title} 
            year={element.Year}
            img={element.Poster}
          />
          )
          
        })
        }
        
       
      </div>
      
    </>
  );
}

export default App;
