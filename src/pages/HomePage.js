import { useEffect, useState } from "react";
import { Header } from "../components/Header";


export const HomePage = () => {
    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [text, setText] = useState("");

    const heading = "Word Counter";
    const subHeading = "Free Online character admin word counter tool.";

    useEffect(() => {
        function countWords() {
            const charCount = text.length;
            const wordCount = text ? text.trim().split(" ").length : 0;
            setWordCount(wordCount);
            setCharacterCount(charCount);
        }
        countWords();
    }, [text]);

    return (
        <main>
            <Header heading={heading} subHeading={subHeading} />
            <section className="counter">
                <textarea onChange={(e) => { setText(e.target.value) }} value={text} placeholder="Type or paste your text"></textarea>
                <button disabled={!text ? "disabled" : ""} onClick={() => setText("")} > Clear</button>
                <div className="result">
                    <span>Character: {characterCount}</span>
                    <span>Word: {wordCount}</span>
                </div>
            </section>
        </main>
    )
}
