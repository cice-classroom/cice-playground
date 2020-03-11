import React, { useEffect } from 'react'

export function App() {
  useEffect(() => {
    console.log(1)
    const response = fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => data.image)

    response.then(result => {
      console.log(result)
    })
    console.log(response)
  }, [])
  return (
    <div className="App">
      <div>hola</div>
    </div>
  )
}
