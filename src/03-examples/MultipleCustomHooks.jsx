import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    const { counter, decrease, increment } = useCounter(1);
    const {data, hasError, isLoading}  =  useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);



  return (
    <>
        <h1> Pokemon information</h1>
        <hr />

        { isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprites={ [
          data.sprites.front_default, 
          data.sprites.front_shiny, 
          data.sprites.back_default, 
          data.sprites.back_shiny
          ]} /> }
        <h2> {data?.name}</h2>

        <button className='btn btn-primary mt-2'
        onClick={ () => (counter > 1 ? decrease() : null )}> 
          Previous
        </button>
        <button className='btn btn-primary mt-2' onClick={() => increment() }> 
          Next
        </button>
    </>
  )
}
