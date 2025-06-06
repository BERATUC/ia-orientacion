export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { ecuacion, respuesta } = req.body;

    // Resolver ecuación tipo "a + b"
    const [a, , b] = ecuacion.split(" ");
    const resultado = parseInt(a) + parseInt(b);

    const mensaje = parseInt(respuesta) === resultado
      ? "¡Muy bien! ✅"
      : `Incorrecto. La respuesta correcta es ${resultado}`;

    res.status(200).json({ mensaje });
    return;
  }

  res.status(405).json({ mensaje: 'Método no permitido' });
}
