import { fetchPokemonList } from "@/services/pokemon"
import { faker } from '@faker-js/faker'
import { render, screen } from "@testing-library/react"
import PokemonList from "./pokemon-list"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [
        {
            id: 1,
            name: "Pikachu",
            image: faker.image.urlPlaceholder(),
            type: "Electric"
        },
        {
            id: 2,
            name: "Charmander",
            image: faker.image.urlPlaceholder(),
            type: "Fire"
        },
    ]
})

describe("Testing PokemonList component", () => {
    it("should have a list with 2 pokemons", async () => {
        render(<PokemonList fetchPokemons={mockFetchListPokemonFn} />)
        const items = await screen.findAllByRole("listitem")
        expect(items).toHaveLength(2)
    })

    it("should have a pikachu on list", async () => {
        render(<PokemonList fetchPokemons={mockFetchListPokemonFn} />)

        const pokemons = await mockFetchListPokemonFn()

        expect(pokemons).toHaveLength(2)
        expect(pokemons[0].name).toBe("Pikachu")

        const pikachu = await screen.findByText("Pikachu")
        expect(pikachu).toBeInTheDocument()
    })
})