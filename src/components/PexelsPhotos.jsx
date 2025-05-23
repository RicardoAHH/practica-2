// import { useEffect, useState } from 'react';
// import { createClient } from 'pexels';

// //Clave de API de Pexels
// const client = createClient('JNmdMAkd4EopN8OnxSkEZ9es3QFQuKsdn9XAWvRRrO3CwVLOIG17pb4c');

// function PexelsPhotos({ search }) {
//     const [photos, setPhotos] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);



//     useEffect(() => {
//         const fetchPhotos = async () => {
//             try {
//                 // Hacemos la solicitud a la API de Pexels
//                 // Puedes cambiar 'curated' por 'search' y añadir un query, por ejemplo:
//                 // const response = await client.photos.curated({ per_page: 15 });
//                 const response = await client.photos.search({ query: search, per_page: 15 });

//                 if (response.photos) {
//                     setPhotos(response.photos);
//                 } else {
//                     // Manejar casos donde la respuesta no tiene 'photos'
//                     setError("No se encontraron fotos o la respuesta no es la esperada.");
//                 }
//             } catch (err) {
//                 setError("Error al cargar las fotos: " + err.message);
//                 console.error("Error fetching photos:", err);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchPhotos();
//     }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

//     if (isLoading) {
//         return <p>Cargando fotos...</p>;
//     }

//     if (error) {
//         return <p style={{ color: 'red' }}>Error: {error}</p>;
//     }

//     return (
//         <div>

//             <div className='flex flex-wrap justify-center gap-[10px]'>
//                 {photos.map(photo => (
//                     <div key={photo.id} style={{ padding: '5px' }}>
//                         <img
//                             src={photo.src.medium}
//                             alt={photo.alt}
//                             style={{ width: 'auto', height: '200px' }}
//                         />
//                         <p className='text-white'>{photo.photographer}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
const client = createClient('JNmdMAkd4EopN8OnxSkEZ9es3QFQuKsdn9XAWvRRrO3CwVLOIG17pb4c');

// Componente para desplegar las fotos
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
                let response;
                if (search === "mountain" || search === "Beaches" || search === "Birds" || search === "Foods") {
                    response = await client.photos.search({ query: search, per_page: 15 });
                } else {
                    response = await client.photos.search({ query: search, per_page: 15 });
                }


                if (response.photos) {
                    setPhotos(response.photos);
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
            <h1>Fotos de Pexels para "{search}"</h1>
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