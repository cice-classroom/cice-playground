import React, { useEffect, useState } from 'react'

interface PokemonDto {
  count: number
  next: string
  previous: null | string
  results: { name: string; url: string }[]
}

export const ExerciseSeven: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([])

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result: PokemonDto = await response.json()
    const names = result.results.map(result => result.name)
    setPokemons(names)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  )
}
