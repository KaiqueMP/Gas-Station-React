import React, { useEffect } from 'react'
import api from '../../services/api'

export default function GasStations() {

  const useLat = -33.8670522
  const useLong = 151.1957362
  
  


  

  useEffect(() => {
    api
      .get(
        `place/nearbysearch/json?location=${useLat}%2C${useLong}&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCnnpVJ2TEjZOJr1EW_IExn2uj_owJb5hI`
      )
      .then(response => {
        console.log(response.data)
        for (const item in response.data.results) {
          const itemDesc = response.data.results[item]
          const itemName = itemDesc.name 
          console.log(itemName)
        }

        
        
      })

      .catch(err => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [useLat, useLong])

  return <div className="App"></div>
}
