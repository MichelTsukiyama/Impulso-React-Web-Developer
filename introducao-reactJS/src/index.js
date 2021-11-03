import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum (a, b) {
    return a + b
}

function primeiroJSX() {
    return(
        <div className="teste">
            Michel
            <h1>Soma: {sum(1, 2)}</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            Hello World
            {/* funções javascript sempre entre chaves {} */}
            {primeiroJSX} 
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)