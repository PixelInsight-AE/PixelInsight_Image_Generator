import { useState } from "react";

// ! This is the component that renders the generated image(s)
// ? It is receiving the state of the generated image(s) as a prop from the App component.
function GeneratedImageComponent({
  nineGeneratedImages,
  setNineGeneratedImages,
}) {
  //updates the state of the generated image
  const handleSubmitWithState = async (event) => {
    await handleSubmit(event, setNineGeneratedImages);
  };

  return (
    <div>
      <>
        <div className="header-section">
          {/* form to submit prompt */}
          <form onSubmit={handleSubmitWithState}>
            <input type="text" id="prompt-input" placeholder="Prompt: " />
            <button type="submit">Generate</button>
          </form>

          <div className="image-container">
            {/* generated images mapped out into jsx elements */}
            {nineGeneratedImages.map((url, index) => (
              <img key={index} src={url} alt="Generated Image" />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

// ! This handle submit calls the backend API
// ? It is receiving the setNineGeneratedImages state as a prop from the App component.
// ? It is also receiving the event as a prop from the GeneratedImageComponent component.

const handleSubmit = async (event, setNineGeneratedImages) => {
  event.preventDefault();
  const prompt = document.getElementById("prompt-input").value;
  console.log(prompt);

  const response = await fetch(
    `https://agile-everglades-51970.herokuapp.com/api/OPENAI`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ? This is the body of the fetch call
      body: JSON.stringify({
        prompt: prompt,
      }),
    }
  );

  // ! This is the response from the backend API
  const nineGeneratedImages = [];
  if (response.ok) {
    const data = await response.json();

    // ! we push the generated image(s) into an array
    for (let i = 0; i < 9; i++) {
      nineGeneratedImages.push(data.data[i].url);
    }

    // ? we update the state of the generated image(s)
    setNineGeneratedImages(nineGeneratedImages);
  } else {
    const err = await response.text();
    console.log(err);
  }
  return nineGeneratedImages;
};

function App() {
  const [nineGeneratedImages, setNineGeneratedImages] = useState([]);

  return (
    <>
      <header className="App-header">
        <img src="https://i.imgur.com/fj20TYw.png" />
        <p>"Insightful solutions for a pixel-perfect world"</p>
      </header>
      <main>
        <GeneratedImageComponent
          nineGeneratedImages={nineGeneratedImages}
          setNineGeneratedImages={setNineGeneratedImages}
        />
      </main>
      <footer>
        <FooterLinks />
      </footer>
    </>
  );
}

function FooterLinks() {
  return (
    <>
      <p>
        © 2023 Pixel Insight A.E. - Image Generator{" "}
        <a href="https://github.com/PixelInsight-AE" target="_blank">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </p>
    </>
  );
}

export default App;
