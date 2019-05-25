import React from 'react';
import Movie from './components/Movie'

class App extends React.Component {

  state = {
    movies: []
  }

  componentDidMount = async() =>{
    const response = await fetch('http://www.omdbapi.com/?s=Lone&apikey=1c889ae');
    const data = await response.json()
    this.setState({
      movies: data.Search,
    })

  }
  render() {
    return (
      <div className="container">
        <div className="search">
          <input type="text" className="input" placeholder="Procurar filme..."></input>
          <button className="btn">Go</button>
        </div>
        <section className="movies">
          <div className="results">
          {this.state.movies.map(movie=>{
            return <Movie cover= {movie.Poster} />            
          })}            
          </div>
        </section>
      </div>
    );
  }

}

export default App;
