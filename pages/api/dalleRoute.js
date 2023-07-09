
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();



const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);



export default async function dalle (req, res)  {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
};

