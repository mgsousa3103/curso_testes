'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Form } from "@/components/ui/form"
import { H1 } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

const SignUp = () => {
    const router = useRouter()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        router.push("/dashboard")
    }
    return (
        <Container>
            <Form>
                <H1>Cadastre-se</H1>
                <Input type="text" placeholder="Insira seu nome" />
                <Input type="text" placeholder="Insira seu e-mail" />
                <Input type="text" placeholder="Insira sua senha" />
                <Button onClick={handleSubmit}>Sign up</Button>
            </Form>
        </Container>
    )
}

export default SignUp