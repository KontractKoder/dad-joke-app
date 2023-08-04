import React, { useState } from 'react';
import axios from 'axios';
import RainbowBorder from "./RainbowBorder";

const GetJoke = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      setJoke(response.data.joke);
      console.log(joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };
  
  const periodIndex = joke.indexOf('.');
  const questionMarkIndex = joke.indexOf('?');
  
  const separatorIndex = (periodIndex !== -1 && questionMarkIndex !== -1) 
    ? Math.min(periodIndex, questionMarkIndex) 
    : Math.max(periodIndex, questionMarkIndex);
  
  // Extract the first sentence (setup)
  const setup = joke.substring(0, separatorIndex + 1);
  
  // Extract the second sentence (punchline)
  const punchline = joke.substring(separatorIndex + 2); // +2 to skip the space after the period or question mark
  
  console.log('Joke:', joke);
  console.log("Setup:", setup);
  console.log("Punchline:", punchline);
  return (
    <div className="container">
        <RainbowBorder>
        <div className="joke-container">
        <h1>Dad Jokes</h1>
        <p >{setup}</p>
        <p >{punchline}</p>
        <button onClick={fetchJoke}>Get a New Joke</button>
        </div>
        </RainbowBorder>
    </div>
  );
};

export default GetJoke;
