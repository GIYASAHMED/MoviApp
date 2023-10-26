import Header from "./components/Header";
import Movie from "./components/Movie";
import Movies from './movie.json'

function App() {

  
  return (
    <>
      <Header />

      <div className="container w-full mx-auto  flex flex-wrap justify-center gap-10 my-10">
        {
          Movies.map((element, index) => {
            return (
              <Movie
              key={index}
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
