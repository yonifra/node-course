// STARTING NODE 18 - FETCH IS PART OF NODE AS AN EXPERIMENTAL FLAG
// FETCH API EXAMPLE

async function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((jokeAsJson) => {
      console.log('Here is a Chuck Norris joke for you (2):')
      console.log(jokeAsJson.value)
    })
    .catch((error) => console.error('Error fetching SVG:', error))
}
fetchJoke()
