// components/LocationInput.tsx
'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

interface Coordinates {
  lat: number
  lng: number
}

interface PlaceValue {
  placeName: string
  coordinates: Coordinates
}

interface SelectOption {
  label: string
  value: PlaceValue
}

interface LocationValue {
  _type: string
  placeName: string
  coordinates: {
    _type: 'geopoint'
    lat: number
    lng: number
  }
}

interface Props {
  value: LocationValue | null
  onChange: (value: LocationValue) => void
  type: {
    title: string
    name: string
    options?: unknown
  }
}

interface NominatimPlace {
  display_name: string
  lat: string
  lon: string
}

const LocationInput = ({ value, onChange, type }: Props) => {
  const [options, setOptions] = useState<SelectOption[]>([])

  const handleInputChange = async (inputValue: string) => {
    if (!inputValue) return
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: inputValue,
          format: 'json',
          addressdetails: 1,
          countrycodes: 'tn', // Tunisia only
          limit: 5,
        },
      })
      const newOptions: SelectOption[] = response.data.map((place: NominatimPlace) => ({
        label: `${place.display_name}`,
        value: {
          placeName: place.display_name,
          coordinates: {
            lat: parseFloat(place.lat),
            lng: parseFloat(place.lon),
          },
        },
      }))
      setOptions(newOptions)
    } catch (err) {
      console.error('Search error:', err)
    }
  }

  const handleSelect = (selected: SelectOption | null) => {
    if (!selected) return
    onChange({
      _type: type.name,
      placeName: selected.value.placeName,
      coordinates: {
        _type: 'geopoint',
        lat: selected.value.coordinates.lat,
        lng: selected.value.coordinates.lng,
      },
    })
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>{type.title}</label>
      <Select
        placeholder="Rechercher une localité en Tunisie..."
        onInputChange={handleInputChange}
        onChange={handleSelect}
        options={options}
      />
      {value?.placeName && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Nom:</strong> {value.placeName}<br />
          <strong>Lat:</strong> {value.coordinates?.lat}<br />
          <strong>Lng:</strong> {value.coordinates?.lng}
        </div>
      )}
    </div>
  )
}

export default LocationInput
