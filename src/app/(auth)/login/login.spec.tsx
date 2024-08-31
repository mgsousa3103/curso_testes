import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./page"
import mockRouter from "next-router-mock"

const push = vi.fn()
vi.mock('next/navigation', () => require('next-router-mock'))

describe("Testa o componente de Login", () => {
    it("should be a title writed 'Sign In'", async () => {
        render(<Login />);
        const title = await screen.findByRole('heading', {
            name: 'Sign In'
        })
        expect(title).toBeInTheDocument()
    })

    it("should have two Inputs on screen", async () => {
        render(<Login />);
        const inputs = await screen.findAllByRole('textbox')
        expect(inputs).toHaveLength(2)
    })

    it("should be an input to e-mail", async () => {
        render(<Login />);
        const email_input = await screen.findByPlaceholderText("Insira seu e-mail")
        expect(email_input).toBeInTheDocument()
    })

    it("should be an input to password", async () => {
        render(<Login />);
        const email_password = await screen.findByPlaceholderText("Insira sua senha")
        expect(email_password).toBeInTheDocument()
    })

    it("should be a Button and this Button should have a text 'Login'", async () => {
        render(<Login />);
        const button = await screen.findByRole("button", {
            name: "Login",
        })
        expect(button.textContent).toBe("Login")
    })

    it("should call router.push once form is submitted", async () => {
        mockRouter.push = push
        render(<Login />)
        const button = await screen.findByRole("button")
        fireEvent.click(button)
        expect(push).toHaveBeenCalledTimes(1)
    })

    it("should have a link to /signup page", async () => {
        render(<Login />)
        const link = await screen.findByRole("link", {
            name: "Nao tem cadastro? Clique aqui"
        })
        expect(link).toBeInTheDocument()
    })
})