import { fireEvent, render, screen } from "@testing-library/react"
import SignUp from "./page"
import mockRouter from "next-router-mock"

const push = vi.fn()
vi.mock("next/navigation", () => require("next-router-mock"))

describe('Testa a pagina SignUp', () => {
    it("should have 3 inputs on screen", async () => {
        render(<SignUp />)
        const inputs = await screen.findAllByRole("textbox")
        expect(inputs).toHaveLength(3)
    })

    it("should have an input for name, e-mail and password", async () => {
        render(<SignUp />)
        const inputName = await screen.findByPlaceholderText("Insira seu nome")
        const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail")
        const inputPassword = await screen.findByPlaceholderText("Insira sua senha")

        expect(inputName).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
    })

    it("should have a button for signing up", async () => {
        render(<SignUp />)
        const button = await screen.findByRole("button")
        expect(button).toHaveTextContent("Sign up")
    })

    it("should have a title 'Cadastre-se'", async () => {
        render(<SignUp />)
        const title = await screen.findByRole('heading', {
            level: 1
        })
        expect(title).toHaveTextContent("Cadastre-se")
    })

    it("should navigate to Dashboard Page", async () => {
        mockRouter.push = push
        render(<SignUp />)
        const button = await screen.findByRole("button")
        fireEvent.click(button)
        expect(push).toHaveBeenCalledTimes(1)
    })
})