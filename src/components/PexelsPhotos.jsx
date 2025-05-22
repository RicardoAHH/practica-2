import { useEffect, useState } from 'react';
import { createClient } from 'pexels';

//Clave de API de Pexels
const client = createClient('JNmdMAkd4EopN8OnxSkEZ9es3QFQuKsdn9XAWvRRrO3CwVLOIG17pb4c');

function PexelsPhotos() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Hacemos la solicitud a la API de Pexels
                // Puedes cambiar 'curated' por 'search' y añadir un query, por ejemplo:
                // const response = await client.photos.search({ query: 'nature', per_page: 15 });
                const response = await client.photos.search({ query: 'foods', per_page: 15 });

                if (response.photos) {
                    setPhotos(response.photos);
                } else {
                    // Manejar casos donde la respuesta no tiene 'photos'
                    setError("No se encontraron fotos o la respuesta no es la esperada.");
                }
            } catch (err) {
                setError("Error al cargar las fotos: " + err.message);
                console.error("Error fetching photos:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

    if (isLoading) {
        return <p>Cargando fotos...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-[10px]'>
                {photos.map(photo => (
                    <div key={photo.id} style={{ padding: '5px' }}>
                        <img
                            src={photo.src.medium}
                            alt={photo.alt}
                            style={{ width: 'auto', height: '200px' }}
                        />
                        <p className='text-white'>{photo.photographer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PexelsPhotos;