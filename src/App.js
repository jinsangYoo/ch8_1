import "./App.css"
import React, { useState } from "react"
import { AdvancedGitHubUser as GitHubUser } from "./components"

function App() {
  const [login, setLogin] = useState("jinsangYoo")

  return (
    <>
      <GitHubUser login={login} />
    </>
  )
}

export default App
