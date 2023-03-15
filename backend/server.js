// ! importing all the dependencies
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

// ! initializing the app
// TODO: openai configuration
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

// TODO: initialize express app
const app = express();
app.use(cors());
app.use(express.json());





// ! get from front end
// TODO: app.get hello world

app.get('/', async (req, res) => {
  res.send('Hello World!');
});


// ! post to front end
// TODO: app.post /api/complete

app.post('/posts', async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
  try {
    // ! n is the number of images you want to generate, sizes available are 256x256, 512x512, 1024x1024
    const response = await openai
      .createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      })
      .catch((error) => {
        console.log(`OPENAI ERR: ${error}`);
      });

      console.log(response.data);
      

      const image_url = response.data;

      console.log(image_url);
      
      

      res.status(200).send(image_url);
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
});



let randomPrompt = Math.floor(Math.random() * 25);


const examplePrompts = [
  "A city skyline at sunset",
  "A vibrant tropical forest",
  "An underwater world with exotic fish",
  "A lone figure walking through a desert",
  "A serene landscape of rolling hills",
  "An otherworldly planet with multiple moons",
  "A surreal garden with giant flowers",
  "A snowy mountain range at dawn",
  "A sci-fi metropolis at night",
  "A majestic eagle soaring in the sky",
  "A futuristic city with hovercars",
  "A magical forest with glowing mushrooms",
  "A tranquil lake with misty mountains in the distance",
  "A vintage cafe with cozy lighting",
  "A bustling market in a foreign city",
  "A ship sailing across a stormy sea",
  "A fiery volcano with molten lava",
  "A futuristic spacecraft in orbit",
  "A spooky haunted house at midnight",
  "A dramatic lightning storm over a landscape",
  "An ancient temple hidden within a jungle",
  "A modern art museum filled with colorful installations",
  "A mystical mermaid swimming in the ocean",
  "A post-apocalyptic wasteland with ruins",
  "A serene mountain lake at sunset"
]
//console.log(examplePrompts[randomPrompt]);
// ! listen to port
// TODO: app.listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});