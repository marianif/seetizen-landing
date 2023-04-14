import { useEffect, useRef, useState, useCallback } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

import styles from "@/styles/pages/Map.module.css"

const GOOGLE_API_KEY = "AIzaSyBi9kz22Ci2VxkGbeKstGni1_3YOOnJagM"
const GOOGLE_PLACES_API = "AIzaSyCLdAQiFWA2aDCX5RarDZMc5PQuhPjfySU"

const containerStyle = {
  width: "400px",
  height: "400px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default Map
