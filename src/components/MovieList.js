import React, {useState, useEffect} from 'react'
import AboutMovie from './AboutMovie'

function MovieList() {
  
    return (
       <div className="movies">
       <div className= "row pt-5">
       <div className= "col-md-3">
            <img className="img-fluid" src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" className="img-fluid" />
            <div className="movies__detail">
                <h3 className="movies__detail__title">blade Runner</h3>
                <p className="movies__detail__released">2020</p>
            </div>
        </div>

        <div className= "col-md-3">
            <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" className="img-fluid" />
            <div className="movies__detail">
                <h3 className="movies__detail__title">blade Runner</h3>
                <p className="movies__detail__released">2020</p>
            </div>
        </div>

        <div className= "col-md-3">
            <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" className="img-fluid" />
            <div className="movies__detail">
                <h3 className="movies__detail__title">blade Runner</h3>
                <p className="movies__detail__released">2020</p>
            </div>
        </div>

        <div className= "col-md-3">
            <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" className="img-fluid" />
            <div className="movies__detail">
                <h3 className="movies__detail__title">blade Runner</h3>
                <p className="movies__detail__released">2020</p>
            </div>
        </div>

        <div className= "col-md-3">
            <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" className="img-fluid" />
            <div className="movies__detail">
                <h3 className="movies__detail__title">blade Runner</h3>
                <p className="movies__detail__released">2020</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default MovieList
