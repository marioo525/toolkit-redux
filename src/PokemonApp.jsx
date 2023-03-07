import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, setPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const { isLoading, pokemons, page } = useSelector( state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Cargando: { isLoading ? 'True' : 'False' }</span>

        <ul>
          {
            pokemons.map( (pokemon) => (
              <li key={pokemon.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
            ))
          }
        </ul>

        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => dispatch( getPokemons(page) ) }
        >
          Siguiente página
        </button>
    </>
  )
}
