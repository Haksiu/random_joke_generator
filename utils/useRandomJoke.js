import {useState, useEffect} from 'react'

function useRandomJoke(firstName, lastName) {
    const [joke, setJoke] = useState("");

    useEffect(() => {
      const fetchRandomJoke = async () => 
        await fetch(
          `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
          ).then(res => res.json())
          .then((data) => {
            setJoke(data.value.joke);
        })
        fetchRandomJoke();
    }, [firstName, lastName])

    return joke;
}

export default useRandomJoke