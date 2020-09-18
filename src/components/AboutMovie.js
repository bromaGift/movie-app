import React from 'react'

function AboutMovie() {
    return (
        <div className="about-movie" >
            <div className="row">
                <div className="col-sm-5">
                    <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="blade-runner" />
                </div>
                <div className="about-movie__all col-sm-7">
                    <h3 className="about-movie__all__title">Blade Runer</h3>
                    <h4 className="about-movie__all__released">2020</h4>
                    <h5 className="about-movie__all__genre">Action / Drama / Mystery / Sci-Fi / Thriller</h5>
                    <p className="about-movie__all__description">Thirty years after the events of Blade Runner (1982),
                        a new Blade Runner, L.A.P.D. Officer "K" (Ryan Gosling),
                        unearths a long-buried secret that has the potential to
                        plunge what's left of society into chaos. K's discovery
                        leads him on a quest to find Rick Deckard
                        (Harrison Ford), a former L.A.P.D. Blade Runner, who
                        has been missing for thirty years.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMovie
