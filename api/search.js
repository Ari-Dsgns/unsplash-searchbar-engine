export default async function handler(req, res) {
  const { query } = req.query || {};

  if (!query) {
    return res.status(400).json({ error: "Falta el parámetro 'query'" });
  }

  try {
    const url = new URL('https://api.unsplash.com/search/photos');
    url.searchParams.set('query', query);
    url.searchParams.set('per_page', '24');

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`
      }
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al buscar imágenes' });
  }
}