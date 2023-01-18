import React, { Component } from 'react';
import './movies.css';
 class Movies extends Component{
    state={
        name: "",
        genre: "",
        year: "",
        producer: "",
        movieList: [],
        mv:""
    };
     
    addMovie=(event)=>{
        event.preventDefault();
        console.log("adding a movie");
        const name = this.state.name;
        const genre = this.state.genre;
        const year = this.state.year;
        const producer = this.state.producer;
        const movie = {name, genre, year, producer};
        console.log(movie);
        let {movieList} = this.state;
        movieList.push(movie);
        this.setState({movieList});
        console.log(this.state.movieList);
        this.showMovie();
        this.state.name = "";
        this.state.genre = "";
        this.state.year = "";
        this.state.producer = "";
    };
    showMovie = ()=>{
        let {movieList}  = this.state;
        let mv = movieList.map(m=><tr><td>{m.name}</td>
        <td>{m.genre}</td>
        <td>{m.year}</td>
        <td>{m.producer}</td>
        </tr>);
        this.setState({mv});
        };
    
        
    
    movieHandler = (event)=>{
        console.log(event.target.value);
        let value = event.target.value;
        this.setState({[event.target.name]: value});
    }

 render(){
    return <div>
        <form className='form' onSubmit={this.addMovie}>

          <div className='row form-group'>
             <div className='col-md-4'>
              <label>Movie name: </label>
             </div>

          <div className='col-md-8 form-group'>
              <input type='text' className='form-control' name="name" value={this.state.name} onChange={this.movieHandler} />
          </div>

          </div>
        

        

<div className='row form-group'>
   <div className='col-md-4'>
    <label>Genre: </label>
   </div>

<div className='col-md-8 form-group'>
    <input type='text' className='form-control' name="genre" value={this.state.genre} onChange={this.movieHandler}/>
</div>

</div>


<div className='row form-group'>
   <div className='col-md-4'>
    <label>Year: </label>
   </div>

<div className='col-md-8 form-group'>
    <input type='text' className='form-control' name="year" value={this.state.year} onChange={this.movieHandler}/>
</div>

</div>

<div className='row form-group'>
   <div className='col-md-4'>
    <label>Producer: </label>
   </div>

<div className='col-md-8 form-group'>
    <input type='text' className='form-control' name="producer" value={this.state.producer} onChange={this.movieHandler}/>
</div>

</div>


<button className='btn btn-primary'>Add Movie</button>
    </form>
    <br/>
    <br/>
    <div >
        <h5>Movie List</h5>
      <table className='table table-bordered'>
           {this.state.mv}
      </table>
    </div>

    </div>

 }
 }
export default Movies;