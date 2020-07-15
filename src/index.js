import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

// eslint-disable-next-line
function MyInfo(){
    return (
        <div>
            <h1>Hello, I'm Aperson</h1>
            <p>Believe it or not, I'm a person</p>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))