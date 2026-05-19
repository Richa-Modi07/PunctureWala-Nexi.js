"use client"
import { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';


const Maps = () => {
    const [center, setCenter] = useState<{ lat: number, lng: number } | undefined>(undefined)

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("Geolocation not Supported");
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { longitude, latitude } = position.coords;
                setCenter({ lat: latitude, lng: longitude });
            },
            (error) => console.log(error),
            {
                enableHighAccuracy: true
            });
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);
    return (
        <div className="h-full bg-linear-to-r from-slate-900 to-blue-900" >
            <APIProvider apiKey={"AIzaSyANh3d1vNKQ_cytvcP3jPFwSMNP8gclOdo"} >
                {center && (
                    <Map
                        style={{ width: '100%', height: '100%' }}
                        center={center}
                        defaultZoom={16}
                        gestureHandling='greedy'
                    >
                        <Marker position={center}></Marker>
                    </Map>
                )}
            </APIProvider>
        </div>
    )
}

export default Maps