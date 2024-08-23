import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import IconMarker from '../assets/map-marker.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getCasesWithCountries } from '../helpers/apis/graph-apis'
import { useQuery } from '@tanstack/react-query'
import { CountryData } from '../helpers/types/graph-types'
import Card from './ui/Card'
import seachImage from '../assets/search.svg'

const markerIcon = new L.Icon({
  iconUrl: IconMarker,
  iconSize: [25, 25],
})

const CasesWorldMap = () => {
  // query for country wise cases
  const {
    data: countriesData,
    isLoading,
    isError,
  } = useQuery<CountryData[]>({
    queryKey: ['countries'],
    queryFn: getCasesWithCountries,
  })

  if (isLoading) {
    return <Card image={seachImage} content='Loading...' />
  }

  if (isError || !countriesData) {
    return <Card image={seachImage} content='Error Fecting Data..' />
  }

  return (
    <div className='w-full h-full bg-neutral-200 shadow-lg rounded-lg overflow-hidden font-palanquin'>
      <MapContainer
        center={[20, 0]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {countriesData.map((country: CountryData, _id) => (
          <Marker
            key={_id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={markerIcon}
          >
            <Popup>
              <div>
                <strong>{country.country}</strong>
                <br />
                Active cases: {country.active}
                <br />
                Recovered cases: {country.recovered}
                <br />
                Deaths: {country.deaths}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default CasesWorldMap
