"use client"
import { Phone, MessageSquare } from "lucide-react"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useState, useEffect } from "react";

export default function ActiveJobCard() {
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
        <>
            <div className="flex justify-between items-center mb-2">
                <div className="text-2xl text-black font-semibold">Current Active Job</div>
                <div className="text-xs text-blue-600 uppercase bg-blue-100 rounded-2xl px-2 py-1 font-semibold">
                    in progress
                </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-3xl overflow-hidden">
                <div className="p-6 space-y-5">
                    <div className="h-56 bg-linear-to-r from-slate-900 to-blue-900" >
                        <APIProvider apiKey={"AIzaSyANh3d1vNKQ_cytvcP3jPFwSMNP8gclOdo"} >
                            {center && (<Map
                                style={{ width: '100%', height: '100%' }}
                                center={center}
                                zoom={15}
                                gestureHandling='greedy'
                            >
                                <Marker position={center}></Marker>
                            </Map>
                            )}
                        </APIProvider>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl text-black">Rajesh Kumar</h3>
                            <p className="text-sm text-gray-400">Silver Honda City</p>
                        </div>
                        <div className="flex gap-3">
                            <Phone size={18} className="text-black" />
                            <MessageSquare size={18} className="text-black" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-100 shadow-sm text-black">
                            <div className="p-4">Flat Rear Tire</div>
                        </div>
                        <div className="bg-white border border-gray-100 shadow-sm text-black">
                            <div className="p-4">₹450.00</div>
                        </div>
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 w-full rounded-full h-12 text-center">I HAVE ARRIVED</div>
                </div>
            </div>
        </>
    );
}

