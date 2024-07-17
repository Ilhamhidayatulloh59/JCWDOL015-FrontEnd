import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
    border-radius: 30px;
`

function Welcome() {
    return (
        <div>
            <h1 style={{ color: '#F6FB7A' }}>
                Welcome to my website
            </h1>
            <StyledButton>Submit</StyledButton>
        </div>
    )
}

export default Welcome