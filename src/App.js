import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState({})

  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/juanigallo")
    const getJson = await getData.json()

    setData(getJson)
    
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <>
    Login:{data.login}
    </>
  );
}

export default App;
