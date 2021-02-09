import React, { useState, useEffect } from "react";

function DadJokes() {
    const [joke, setJoke] = useState({});

    function getJoke(){
        fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
            .then((response) => response.json())
            .then((json) => setJoke(json.data.children[0].data));
    }

    useEffect(() => {
        getJoke();
    }, []);

    useEffect(() => {
        console.log(joke);        
    }, [joke]);

    return (
        <div className="joke">
            <h2>Dad Joke</h2>
            <p>{joke.title}</p>
            <p>{joke.selftext}</p> 
        </div>
    );
}

export default DadJokes;
