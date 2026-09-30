import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {

  return (
      <>
    <h1 className='text-blue-400'>Movies</h1>
    <div className="navigationManual">
      <nav>
        <a href="">Home</a>
        <br />
        <br />
        <form action="">
          <input
            style={{ borderRadius: 7 }}
            type="text"
            name="searchTitle"
            placeholder="Search Movie"
          />
          <input
            style={{ borderRadius: 7 }}
            type="text"
            name="searchGenre"
            placeholder="Search Genre"
          />
          <input
            style={{ borderRadius: 7 }}
            type="submit"
            defaultValue="Search"
          />
          <select name="sort" style={{ borderRadius: 7 }}>
            <option value="Sort Movie" selected="" disabled="">
              Sort Movie
            </option>
            <option value="Terbaru">Terbaru</option>
            <option value="Terlama">Terlama</option>
          </select>
        </form>
      </nav>
    </div>
    <br />
    <div className="page">
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
      <div className="card">
        <img
          style={{ display: "flex", justifyContent: "center" }}
          src="https://lumiere-a.akamaihd.net/v1/images/doomsday-teaser_62621027.jpeg"
        />
        <div className="content">
          <p className="title">The Avenger: Doomsday</p>
          <p className="synopsis">
            Synopsis: Heroes from three different worlds must unite when they're
            thrust together to confront a catastrophic danger that could destroy
            everything they know.
          </p>
          <a href="https://www.youtube.com/watch?v=irVNGjRFZGk">Watch Trailer</a>
        </div>
      </div>
    </div>
  </>

  )
}

export default App
