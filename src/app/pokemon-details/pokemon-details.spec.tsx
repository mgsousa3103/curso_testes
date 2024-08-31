import { render } from "@testing-library/react"
import PokemonDetailsPage from "./[id]/page"

describe("Testing Pokemon Details page", () => {
    it("should have an id on page", async () => {
        render(<PokemonDetailsPage params={{ id: '1' }} />)
    })
})