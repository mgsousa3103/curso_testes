import { PokemonType } from "@/types/pokemon"
import { faker } from "@faker-js/faker"
import { fetchPokemonDetails, fetchPokemonList } from "./pokemon"

const createFetchResponse = (data: any) => {
    return { json: () => new Promise(resolve => resolve(data)) }
}

describe("Testing pokemon services", () => {
    it("verify if has been a get list to correct url", async () => {
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type()
            },
            {
                id: 2,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type()
            }
        ]

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(pokemonListResponse))

        const pokemonList = await fetchPokemonList()

        expect(fetch).toHaveBeenCalledWith("http://localhost:3001/pokemons")
        expect(pokemonList).toStrictEqual(pokemonListResponse)
    })

    it("verify if has been a get detail to correct url", async () => {
        const pokemonDetailResponse: PokemonType = {
            id: 1,
            image: faker.image.urlPlaceholder(),
            name: faker.animal.bear.name,
            type: faker.animal.type()
        }


        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(pokemonDetailResponse))

        const pokemon = await fetchPokemonDetails(1)

        expect(fetch).toHaveBeenCalledWith("http://localhost:3001/pokemons/1")
        expect(pokemon).toStrictEqual(pokemonDetailResponse)
    })
})