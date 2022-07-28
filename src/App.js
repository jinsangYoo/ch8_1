import "./App.css"
import React from "react"
import { GitHubUser } from "./components"

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
]

function List({ data = [], renderEmpty, renderItem }) {
  if (!data.length) return renderEmpty
  return <ul>{data.map(renderItem)}</ul>
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty.</p>}
      renderItem={(item, i) => (
        <li key={i}>
          {item.name} - {item.elevation.toLocaleString()}ft
        </li>
      )}
    />
  )
}

export default App
