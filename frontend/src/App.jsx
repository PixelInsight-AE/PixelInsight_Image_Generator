 // TODO: See if we can use the browser router to render the different pages
 // TODO: Add the different pages to the router
 // TODO: Make it so we can process more then one image at a time.
 
 import { BrowserRouter, Route, Link } from 'react-router-dom'
 import { useState, useEffect } from 'react';
 


 
// ! This handle submit calls the backend API
const handleSubmit = async (event, setGeneratedImage, setNineGeneratedImages) => { // ? we pass in the setGeneratedImage state as a prop
  event.preventDefault();
  const prompt = document.getElementById('prompt-input').value;
  console.log(prompt);
  
  // ! This is the fetch call to the backend API
  const response = await fetch(`http://localhost:5175/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // ? This is the body of the fetch call
    body: JSON.stringify({ 
      prompt: prompt,
    }) 
  });
  
  //console.log(response);  
  // ! This is the response from the backend API
  const nineGeneratedImages = [];
  if (response.ok) {
    const data = await response.json();
    //console.log(data);
    for (let i = 0; i < 9; i++) {
      nineGeneratedImages.push(data.data[i].url);
    }
    
    setGeneratedImage(nineGeneratedImages); // ? This is where we set the state of the generated image(s)
    setNineGeneratedImages(nineGeneratedImages);
    
  } else { 
    const err = await response.text();
    console.log(err);
  }
  return nineGeneratedImages;
} 


// function GeneratedImageComponent({ nineGeneratedImages }) {
//   const [generatedImage, setGeneratedImage] = useState();
 
//   const handleSubmitWithState = async (event) => {
//     await handleSubmit(event, setGeneratedImage);
//   }
//   useEffect(() => {
//     setGeneratedImage(nineGeneratedImages);
//   }, [nineGeneratedImages]);
//   return (
//     <div>
//       <h1>See What Others have Created!</h1>
//       <form onSubmit={handleSubmitWithState}>
//         <label>
//           Prompt:
//           <input type="text" id="prompt-input" />
//         </label>
//         <button type="submit">Generate Image</button>
//       </form>
//       {nineGeneratedImages.map((url, index) => (
//         <img key={index} src={url} alt="Generated Image" />
//       ))}
//     </div>
//   ) 
// }

function FooterLinks() {
  return (
    <>
      <ul>
        <li>home</li>
        <li>Pixel Insight</li>
        <li>some link</li>
      </ul>
      <p>© 2023 Pixel Insight</p>
    </>
  )
}




// function App() {
//   const [nineGeneratedImages, setNineGeneratedImages] = useState([]);

//   const handleSetGeneratedImage = (data) => {
//     const newGeneratedImages = data.map((item) => item.url);
//     setNineGeneratedImages([...nineGeneratedImages, ...newGeneratedImages]);
//   };

//   return (
//     <>
//       {/* header */}
//       <header className="App-header">
//         <h1>PixelInsight Image Generator</h1>
//       </header>

//       {/* main */}
//       <main>
//         <GeneratedImageComponent nineGeneratedImages={nineGeneratedImages} handleSetGeneratedImage={handleSetGeneratedImage} />
//         <div>
//           {nineGeneratedImages.map((url, index) => (
//             <img key={index} src={url} alt="Generated Image" />
//           ))}
//         </div>
//       </main>

//       {/* footer */} 
//       <footer> 
//         <FooterLinks />
//       </footer>
//     </>
//   );
// }

// function GeneratedImageComponent({ nineGeneratedImages, handleSetGeneratedImage }) {
//   const [generatedImage, setGeneratedImage] = useState();

//   const handleSubmitWithState = async (event) => {
//     const data = await handleSubmit(event, setGeneratedImage);
//     handleSetGeneratedImage(data);
//   };

//   useEffect(() => {
//     setGeneratedImage(nineGeneratedImages);
//   }, [nineGeneratedImages]);

//   return (
//     <div>
//       <h1>See What Others have Created!</h1>
//       <form onSubmit={handleSubmitWithState}>
//         <label>
//           Prompt:
//           <input type="text" id="prompt-input" />
//         </label>
//         <button type="submit">Generate Image</button>
//       </form>
//       {nineGeneratedImages.map((url, index) => (
//         <img key={index} src={url} alt="Generated Image" />
//       ))}
//     </div>
//   );
// }


function GeneratedImageComponent({ nineGeneratedImages }) {
  const [generatedImage, setGeneratedImage] = useState(nineGeneratedImages);

  const handleSubmitWithState = async (event) => {
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
      {generatedImage.map((url, index) => (
        <img key={index} src={url} alt="Generated Image" />
      ))}
    </div>
  ) 
}

function App() {
  const [nineGeneratedImages, setNineGeneratedImages] = useState([]);

  return (
    <>
      <header className="App-header">
        <h1>PixelInsight Image Generator</h1>
      </header> 
      <main>
        <GeneratedImageComponent nineGeneratedImages={nineGeneratedImages} />
      </main>
      <footer>
        <FooterLinks />
      </footer>   
    </>
  )
}








export default App

// TODO: add main JSX inside of <BrowserRouter> and <Route> tags

/*
  Welcome to the AI Image Generator by PixelInsight! 

Our state-of-the-art image generator uses cutting-edge artificial intelligence technology to create high-quality, unique images that are perfect for use in marketing, advertising, and design. 

With our AI image generator, you simply enter a prompt, such as "mountain landscape" or "city skyline," and watch as our algorithms generate stunning, high-resolution images that perfectly match your criteria. Our AI is trained on millions of images, ensuring that every image it generates is unique and of the highest quality. 

Whether you're a designer, marketer, or business owner looking to create eye-catching visuals, our image generator is the perfect tool for creating stunning images that engage and captivate your audience. 

Our AI image generator is fast, reliable, and easy to use, making it accessible to everyone. With an intuitive user interface and helpful guidance every step of the way, creating breathtaking images has never been easier. 

Trust us to create images that go beyond ordinary and leave an extraordinary impression on your audience. Try out our AI image generator today and transform your design workflow!
*/