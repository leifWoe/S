import React from "react";

const Copykitt: React.FC = () => {

    let resultsElement = null;

    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [hasResults, sethasResults] = React.useState(false);
    //console.log(prompt);

    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        fetch(`https://knde0xjtj4.execute-api.eu-central-1.amazonaws.com/prod/generate_copykitt_output?prompt=${prompt}`)
        .then((res) => res.json())
        .then(onResult);
    };

    const onResult = (data: any) => {
        console.log(data);
        console.log("Data: " + data);
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        console.log("Data -> Snippet: " + data.snippet)
        sethasResults(true);
    };    

    if (hasResults) {
        console.log("generating results");
        // console.log(snippet);
        resultsElement = (
            <div>
                Results: 
                <div>Snippet: {snippet}</div>
                <div>Keywords: {keywords}</div> 
            </div>
        );
    };

    // .join(", ")


    return <div>
        <h1>Generato</h1>
        <input 
            type="text" 
            placeholder="example: 'coffee'"
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            />
        <button onClick={onSubmit}>Submit</button>
        {resultsElement} 
    </div>
};

export default Copykitt;
