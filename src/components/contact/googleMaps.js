import React, { useEffect, useRef } from "react"

export default function Map({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }
  const CLAVE_API = "AIzaSyCajSqfLoeOHbtNrS7OlEppWW_GyPjE0xY"

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src = `https://maps.google.com/maps/api/js?key=` + CLAVE_API
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })

  return (
    <div
      {...props}
      style={{
        height: `80vh`,
        margin: `1.5rem 0 0 0`
      }}
    />
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 19.40018, lng: -99.172661 },
    zoom: 17
  }
}