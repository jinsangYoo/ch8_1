import "./App.css"
import React from "react"
import { tahoe_peaks, List } from "./components"

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
