import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://ai.senrra.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // preflight response
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { pregunta, respuesta } = req.body;
  const prompt = `Un niño resolvió mal esta ecuación: ${pregunta} = ${respuesta}. Explícale de forma simple, amigable y con ejemplo por qué se equivocó y cómo puede resolverla bien.`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const orientacion = completion.data.choices[0].message.content.trim();
    res.status(200).json({ orientacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ orientacion: 'Error al contactar con OpenAI.' });
  }
}
