'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { H1 } from "@/components/ui/heading"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import Link from "next/link"

const Login = () => {
    const router = useRouter()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        router.push('/dashboard')
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <H1>Sign In</H1>
                <Input type="text" placeholder="Insira seu e-mail" />
                <Input type="text" placeholder="Insira sua senha" />
                <Button>Login</Button>
                <Link href="/signup">Nao tem cadastro? Clique aqui</Link>
            </Form>
        </Container>

    )
}

export default Login