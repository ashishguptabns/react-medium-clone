import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: -webkit-center;
    padding-bottom: 40px;
`
const Header = styled.p`
    font-size: 3rem;
`
const Input = styled.input`
    height: 30px;
    width: 200px;
`
const Submit = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
    display: block;
    margin-top: 20px;
`

export default function Login() {
    const [key, setKey] = useState('')
    const handleChange = (e) => {
        setKey(e.target.value)
    }
    const handleSubmit = () => {
        localStorage.setItem('passKey', key)
    }
    return <Container>
        <Header>What's your passkey?</Header>
        <Input onChange={handleChange}></Input>
        <Submit onClick={handleSubmit}>Submit</Submit>
    </Container>
}