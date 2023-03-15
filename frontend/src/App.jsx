// TODO: import all necessary things, including browser router, route, and link
// ? https://reactrouter.com/en/main
// ? https://reactrouter.com/web/api/BrowserRouter

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'

const handleSubmit = async (event, setGeneratedImage) => {
  event.preventDefault();
  const prompt = document.getElementById('prompt-input').value;

  console.log(prompt);
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
    console.log(data.data[0].url);
    setGeneratedImage(data.data[0].url);
    
    
  } else { 
    const err = await response.text();
    alert(err);
    console.log(err);
  }

}

function GeneratedImageComponent() {
  const [generatedImage, setGeneratedImage] = useState();
  
  const handleSubmitWithState = async(event) => {
    await handleSubmit(event, setGeneratedImage);
  }

  return (
    <div>
      <h1>See What Others have Created!</h1>
      <form onSubmit={handleSubmitWithState}>
        <label>
          Prompt:
          <input type="text" id="prompt-input" />
        </label>
        <button type="submit">Generate Image</button>
      </form>
      <img src={generatedImage} alt="React Logo" />
    </div>
  )
}


/* function GeneratedImageComponent() {
  const [generatedImage, setGeneratedImage] = useState();
  
  return (
    <div>
    <h1>See What Others have Created!</h1>
    <img src={generatedImage} alt="React Logo" />
    </div>
    )
  } */


function App() {
  //const [count, setCount] = useState(0)
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
      {/* <form id="prompt-wrapper">
        <input id='prompt-input' placeholder='Enter Prompt Here' type="text" />
        <button type='submit' onClick={handleSubmit}>Create!</button>
      </form> */}

    </header> 

    {/* main */}
    <main>
      <GeneratedImageComponent />
      
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
