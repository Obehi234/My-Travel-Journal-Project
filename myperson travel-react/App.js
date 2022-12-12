import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"



export default function App() {
    const cards = data.map(element=> {
        return (
            <Main 
                key={element.id}
                element = {element}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <section className="card-display">
                {cards}
            </section>
        </div>
    )
  
    }
    

   
