# IA Orientadora para Matemáticas (Vercel API)

Este repositorio contiene una función API para usarse con Vercel. Se conecta a la API de OpenAI para orientar a niños cuando resuelven mal una ecuación.

## 🧠 Requisitos

- Cuenta en [OpenAI](https://platform.openai.com/)
- Cuenta en [Vercel](https://vercel.com)
- Cuenta en [GitHub](https://github.com)

## 🚀 Pasos para desplegar

1. Crea un nuevo repositorio en GitHub (por ejemplo: `ia-orientacion`)
2. Sube el contenido de esta carpeta al repositorio
3. Entra a [vercel.com](https://vercel.com), crea un proyecto nuevo y conecta tu repo
4. En las **variables de entorno** de Vercel, añade:

   - `OPENAI_API_KEY`: tu clave secreta de OpenAI

5. Despliega el proyecto. Vercel te dará una URL como:

```
https://ia-orientacion.vercel.app/api/orientacion
```

6. En tu archivo `script2.js`, reemplaza:

```js
fetch('https://TU_DOMINIO.com/api/orientacion' ...
```

por:

```js
fetch('https://ia-orientacion.vercel.app/api/orientacion' ...
```

¡Listo! Tu app en Hostinger funcionará con esta API segura.
