const axios = require('axios')

// Function to fetch a joke from the Chuck Norris API
async function fetchChuckNorrisJoke() {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    const joke = response.data.value // Extract the joke from the response
    console.log('Here is a Chuck Norris joke for you:')
    console.log(joke)
  } catch (error) {
    console.error('Error fetching the joke:', error)
  }
}

// Call the function
fetchChuckNorrisJoke()
