import { useEffect, useState } from "react";
import { Header } from "../components/Header"

export const JokePage = () => {
    const [joke, setJoke] = useState();

    useEffect(() => {
        async function fetchJoke() {
            try {
                const response = await fetch("https://api.chucknorris.io/jokes/random");
                const data = await response.json();
                setJoke(data.value)
            }
            catch {
                setJoke("No Joke Found");
            }
        }
        fetchJoke();
    }, [])

    const heading = "Chucknorris Jokes";
    const subHeading = "Free JSON API for hand curated Chuck Norris facts.";
    return (
        <main>
            <Header heading={heading} subHeading={subHeading} />
            <section className="joke">
                <p>{joke}</p>
            </section>
        </main>
    )
}
