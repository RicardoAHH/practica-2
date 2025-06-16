

import React, { useEffect, useState } from 'react';
const VITE_SOME_KEY = import.meta.env.VITE_SOME_KEY;

function PexelsPhotos({ search }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true); // Restablece loading a true cada vez que se inicia una nueva búsqueda
            setError(null); // Limpia cualquier error anterior
            //Peticion de las fotos a la api
            try {


                const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=15`, {
                    headers: {
                        Authorization: VITE_SOME_KEY
                    }
                });

                const data = await response.json()
                console.log(data.photos)


                if (data.photos) {
                    setPhotos(data.photos);
                } else {
                    setError("No se encontraron fotos o la respuesta no es la esperada.");
                }
            } catch (err) {
                setError("Error al cargar las fotos: " + err.message);
                console.error("Error fetching photos:", err);
            } finally {
                setLoading(false);
            }
        };

        // si hya aglo en la busqueda despliega si no vacia 
        if (search) {
            fetchPhotos();
        } else {
            setPhotos([]);
            setLoading(false);
        }

    }, [search]); // El efecto se re-ejecutará cada vez que 'search' cambie

    if (loading) {
        return <p>Cargando fotos de "{search}"...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    if (photos.length === 0 && !loading) {
        return <p>No se encontraron fotos para "{search}".</p>;
    }

    return (
        <div>
            <h1 className='text-white'>Fotos de Pexels para "{search}"</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {photos.map(photo => (
                    <div key={photo.id} style={{ border: '1px solid #ddd', padding: '5px' }}>
                        <img
                            src={photo.src.medium}
                            alt={photo.alt}
                            style={{ width: '250px', height: '180px', objectFit: 'cover' }}
                        />
                        <p style={{ fontSize: '0.8em', textAlign: 'center' }}>By {photo.photographer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PexelsPhotos;