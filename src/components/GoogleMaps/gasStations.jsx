// import React, { useState } from 'react'
import api from '../../services/api'

export class GasStations {
  static find() {
    navigator.geolocation.getCurrentPosition(position => {
      api
        .get(
          `place/nearbysearch/json?location=${position.coords.latitude}%2C${position.coords.longitude}&radius=1500&type=gas-stations&keyword=posto-de-gasolina&key=AIzaSyCnnpVJ2TEjZOJr1EW_IExn2uj_owJb5hI`
        )
        .then(response => {
          for (const item in response.data.results) {
            const itemDesc = response.data.results[item]
            const itemName = itemDesc.name
          }
        })

        .catch(err => {
          console.error('ops! ocorreu um erro' + err)
        })
    })

    return []
  }
}

// export default function GasStations() {

//   export  const [gasStations, setGasStations] = useState([]);

//   useEffect(() => {

//     navigator.geolocation.getCurrentPosition((position)=> {
//       api
//       .get(
//         `place/nearbysearch/json?location=${position.coords.latitude}%2C${position.coords.longitude}&radius=1500&type=gas-stations&keyword=posto-de-gasolina&key=AIzaSyCnnpVJ2TEjZOJr1EW_IExn2uj_owJb5hI`
//       )
//       .then(response => {
//         setGasStations(response.data.results)
//       })

//       .catch(err => {
//         console.error('ops! ocorreu um erro' + err)
//         setGasStations([])
//       })
//     })

//   }, [])

// console.log("fora" , latitude, longitude)

// useEffect(()=> {
//     navigator.geolocation.getCurrentPosition((position)=> {
//       setLatitude(position.coords.latitude)
//       setLongitude(position.coords.longitude)

//     })
//   }, [setLatitude, setLongitude])

//   console.log("oHELLO", latitude)

// for (const item in response.data.results) {
//   const itemDesc = response.data.results[item]
//   const itemName = itemDesc.name
