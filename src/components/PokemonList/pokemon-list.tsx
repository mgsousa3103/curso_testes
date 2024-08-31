'use client'
import { PokemonType } from "@/types/pokemon"
import { useCallback, useEffect, useState } from "react"
import { H1 } from "../ui/heading"
import Link from "next/link"
import Image from "next/image"

interface PokemonListProps {
    fetchPokemons: () => Promise<PokemonType[]>
}

const PokemonList = ({ fetchPokemons }: PokemonListProps) => {
    const [pokemons, setPokemons] = useState<PokemonType[]>([])

    const loadData = useCallback(fetchPokemons, [fetchPokemons])

    useEffect(() => {
        loadData().then(setPokemons)
    }, [loadData])

    return (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {pokemons.map(pokemon => (
                <li key={pokemon.id} className="hover:bg-zinc-700">
                    <Link href={`/pokemon-details/${pokemon.id}`} className="flex w-full cursor-pointer flex-col items-center justify-between border p-4 sm:w-[250px]">
                        <H1>{pokemon.name}</H1>
                        <Image
                            src={pokemon.image}
                            alt={pokemon.name}
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PokemonList