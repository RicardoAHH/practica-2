// api/search.js
import { createClient } from 'pexels';

// ¡IMPORTANTE! Usa variables de entorno para tu API key
// En Vercel: Configura una variable de entorno llamada PEXELS_API_KEY
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const client = createClient(PEXELS_API_KEY);

export default async function handler(request, response) {
    // CORS headers - Vercel ya maneja esto bien si usas 'response.json()' por defecto.
    // Pero si necesitas control manual:
    response.setHeader('Access-Control-Allow-Origin', '*'); // O tu dominio específico
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    const query = request.query.q || 'nature';
    const perPage = request.query.per_page || 15;

    try {
        const pexelsResponse = await client.photos.search({ query, per_page: perPage });
        response.status(200).json(pexelsResponse);
    } catch (error) {
        console.error('Error fetching from Pexels:', error);
        response.status(500).json({ error: 'Failed to fetch photos.' });
    }
}