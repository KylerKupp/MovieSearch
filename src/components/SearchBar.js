import React, {useState} from 'react'
import SearchResult from './SearchResult'

function SearchBar() {

  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    fetchData(input)
    e.preventDefault()
  }

  const fetchData = (MovieName) => {
    let url = `http://www.omdbapi.com/?t=${MovieName}&apikey=API_KEY`
    if (MovieName.length < 1) {
      setError(true)
    } else {
      fetch(url).then((resp) => resp.json()).then(data => {
        if (data.Response==="True") {
          setResult(data)
          setError(false)
        } else {
          setError(true)
        }
      })
    }
  }

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
          <div>
              <input className="search-input"
                placeholder="Enter movie name here..."
                type='text'
                value={input}
                onChange={e => {setInput(e.target.value)}}
              />
            <button className="btn" type="submit">Search</button>
          </div>
        </form>
        {error && 
          <h2 className="error">Movie not found!</h2>
        }
        {!error && result!=null &&
          <SearchResult {...result}/>
        }
    </div>
  )
}

export default SearchBar
