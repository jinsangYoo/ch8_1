import React, { useEffect, useState } from "react"
import { useFetch } from "../hooks"

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export default function AdvancedGitHubUser({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`)

  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }
  if (!data) return null

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  )
}
