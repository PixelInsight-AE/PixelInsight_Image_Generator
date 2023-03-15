// TODO: import all necessary things, including browser router, route, and link
// ? https://reactrouter.com/en/main
// ? https://reactrouter.com/web/api/BrowserRouter

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'


const handleSubmit = async (event) => {
  event.preventDefault();
  const prompt = document.getElementById('prompt-input').value;

  console.log(prompt);

  // fetch data from openAi
  const response = await fetch(`http://localhost:5174/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: prompt,
    })
  });

  // console.log(response.body);

  console.log(response);
  
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    const err = await response.text();
    console.log(err);
    alert(err);
  }
  
}



// handleSubmit();


// TODO: get the input value from the input field, and set it to the state, so that it can be sent to the backend

function App() {
  const [count, setCount] = useState(0)

  return (

    // TODO: add main JSX inside of <BrowserRouter> and <Route> tags
    // ? https://reactrouter.com/web/api/Route
    // ? https://reactrouter.com/web/api/Route/route-render-methods
    // ? https://reactrouter.com/web/api/Route/route-props
    // ? https://reactrouter.com/web/api/Link
    // ? https://reactrouter.com/web/api/Link/to-object
    <>

    {/* header */}
    <header className="App-header">
      <h1>PixelInsight Image Generator</h1>
      <form id="prompt-wrapper">
        <input id='prompt-input' placeholder='Enter Prompt Here' type="text" />
        <button type='submit' onClick={handleSubmit}>Create!</button>
      </form>

    </header> 

    {/* main */}
    <main>
      <h2>See what others created!</h2>
      <div id="example-image-wrapper">
        <img src={reactLogo} alt="React Logo" />
      </div>
    </main>

    {/* footer */}
    <footer>
      <p>© 2023 Pixel Insight</p>
    </footer>
    
    </>
  )
}
// TODO: Make sure image resolution for home page images is semi-small to help with load times and cost's
export default App
