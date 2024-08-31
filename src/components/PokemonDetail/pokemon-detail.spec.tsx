import { render, screen } from "@testing-library/react"
import PokemonDetail from "./pokemon-detail"
import { faker } from "@faker-js/faker"

const mockFetchPokemonDetailsFn = vi.fn().mockImplementation(async () => {
    return {
        id: 1,
        name: "Pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletric"
    }
})

describe("Testing PokemonDetail component", () => {
    it("should have an id on page", async () => {
        render(<PokemonDetail id={1} fetchPokemonDetails={mockFetchPokemonDetailsFn} />)
        const title = await screen.findByRole("heading")
        expect(title.textContent).toBe("Pikachu")
    })

    it("should have a link to back to dashboard with name 'Voltar'", async () => {
        render(<PokemonDetail id={1} fetchPokemonDetails={mockFetchPokemonDetailsFn} />)

        const link = await screen.findByRole("link")
        const link_text = await screen.findByText("Voltar")

        expect(link).toBeInTheDocument()
        expect(link_text.textContent).toBe("Voltar")
    })
})