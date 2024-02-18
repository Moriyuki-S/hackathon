import fs from "fs/promises";
import path from "path";
import cors from "cors";
import express from "express";
import OpenAI from "openai";
import { createFlickr } from "flickr-sdk";
import type { Photo } from "../../@types/Photo";

export const app = express();
const openai = new OpenAI();

app.use(cors());
app.use(express.json());

app.get("/api/healthcheck", async (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.get("/api/faqs", async (req, res) => {
  const faqsPath = path.resolve(
    __dirname,
    "..",
    "..",
    "data",
    process.env.FAQS_FILE_NAME as string,
  );
  const faqs = await fs.readFile(faqsPath, "utf-8");
  res.status(200).json(JSON.parse(faqs));
});

app.get("/api/pages/:pageTitle", async (req, res) => {
  const pageTitle = req.params.pageTitle;
  const response = await fetch(
    `https://scrapbox.io/api/pages/${process.env.SCRAPBOX_PROJECT_NAME}/${pageTitle}`,
  );
  if (!response.ok) {
    res.status(404).json({ message: "not found" });
    return;
  }
  const page = await response.json();

  res.status(200).json(page);
});

type PhotoAtFetch = {
  id: string;
  title: string;
  url_c: string;
};


import tf from '@tensorflow/tfjs-node'
import mobilenet from '@tensorflow-models/mobilenet'



// async function classifyImage(imagePath) {
//   const image = fs.readFileSync(imagePath);
//   const decodedImage = tf.node.decodeImage(image, 3);
//   const model = await mobilenet.load();
//   const predictions = await model.classify(decodedImage);
//   console.log('Predictions:', predictions);
//   decodedImage.dispose(); // Clean up memory
//   return predictions;
// }

// const imagePath = process.argv[2]; // Take image path from command line argument
// classifyImage(imagePath)
//   .then(predictions => {
//     const animalPredictions = predictions.filter(prediction => prediction.className.includes('animal'));
//     if (animalPredictions.length > 0) {
//       console.log("This image likely contains an animal.");
//     } else {
//       console.log("No animals detected in this image.");
//     }
//   })
//   .catch(err => console.error(err));

app.get('/api/images/search', async (req, res) => {
  const animalName = req.query.animalName as string;
  if (animalName === "") {
    return [];
  }
  const { flickr } = createFlickr(process.env.FLICKR_API_KEY as string);
  const response = await flickr("flickr.photos.search", {
    text: animalName,
    extras: "url_c"
  });
  const photos = response.photos.photo.map((ph: PhotoAtFetch) => {
    return {
      id: ph.id,
      title: ph.title,
      url: ph.url_c,
    }
  });
  return res.status(200).json(photos);
});

app.get('/api/quiz/generate', async (req, res) => {
  /*
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "この動物はなんですか?" },
          {
            type: "image_url",
            image_url: {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
            },
          },
        ],
      },
    ],
    max_tokens: 300
  });
  return res.status(200).json(response.choices[0].message.content);
  */
  return res.status(200).json('ChatGptのテスト');
});
