import { render, screen } from "@testing-library/react";
import Dashboard from "./page";

describe("Testa a pagina Dashboard", () => {
    it("should be a title writed 'Dashboard'", async () => {
        render(<Dashboard />)
        const title = await screen.findByRole("heading")
        expect(title).toHaveTextContent("Dashboard")
    })
})