
// ! importing all the dependencies
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

// ! initializing the app
// TODO: openai configuration
// TODO: initialize express app
// TODO: use cors
// TODO: use express.json


// ! get from front end
// TODO: app.get hello world

// ! post to front end
// TODO: app.post /api/complete







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

// ! listen to port
// TODO: app.listen