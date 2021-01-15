import { FC, useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

interface Result {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

class PokemonRepository {
  async findAll(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result: Result = await response.json()
    return result.results
  }
}

class PokemonRepositoryFactory {
  static build() {
    return new PokemonRepository()
  }
}

export const Exercise7: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchPokemons() {
    setLoading(true)
    setTimeout(async () => {
      const pokemons = await PokemonRepositoryFactory.build().findAll()
      setPokemons(pokemons)
      setLoading(false)
    }, 1_000)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}
