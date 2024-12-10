// Select the buttons and joke display areas
const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');
const jokeButton2 = document.getElementById('jokeButton2');
const jokeDisplay2 = document.getElementById('joke2');
const emojis = document.querySelectorAll('.circle'); // Select all circle emoji elements

// Function to fetch an English joke
async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
    jokeButton.textContent = "Get more jokes";

    // Trigger animation by adding the class 'animate' to all emoji elements
    emojis.forEach(emoji => {
      emoji.classList.add('animate');
    });

    // Remove the animation class after the animation ends so it can be triggered again
    emojis.forEach(emoji => {
      emoji.addEventListener('animationend', () => {
        emoji.classList.remove('animate');
      });
    });

  } catch (error) {
    jokeDisplay.textContent = "Oops! Couldn't fetch a joke. Try again!";
    console.error("Error fetching English joke:", error);
  }
}

// Function to fetch a Hindi joke
async function fetch2Joke() {
  try {
    // Fetch the Hindi joke from the API
    const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=6f29df278b7c1e87dc8701ee43c7');
    const data = await response.json();

    // Display the joke
    jokeDisplay2.textContent = data.jokeContent;
    jokeButton2.textContent = "Aur Chahiye"; // Update button text

    // Trigger animation by adding the class 'animate' to all emoji elements
    emojis.forEach(emoji => {
      emoji.classList.add('animate');
    });

    // Remove the animation class after the animation ends so it can be triggered again
    emojis.forEach(emoji => {
      emoji.addEventListener('animationend', () => {
        emoji.classList.remove('animate');
      });
    });

  } catch (error) {
    jokeDisplay2.textContent = "Error - Aur nahi bache!!!!";
    console.error("Error fetching Hindi joke:", error);
  }
}

// Add event listeners to the buttons
jokeButton.addEventListener('click', fetchJoke);
jokeButton2.addEventListener('click', fetch2Joke);
