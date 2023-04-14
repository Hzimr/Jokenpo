import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: burlywood;
    width: 40vw;
    padding: 2vw;
    border-radius: 2vw;
    margin: 2vw;
    @media ${'(max-width:420px)'}  {
            width:90%;
            border-radius: 6vw;
    }
`;
export const LabelPlayer = styled.label`
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2vw;
        @media ${'(max-width:420px)'}  {
                font-size: 6vw;         
        }

        `;
export const InputPlayer = styled.input`
        width:40%;
        text-align: center;
        padding:0 1vw ;
        margin: 1vw 0;
        font-size: 2.5vw;
        border-radius: 1vw;
        @media ${'(max-width:420px)'}  {
                width:90%;
                text-align: center;
                padding:0 2vw ;
                margin: 1vw 0;
                font-size: 10vw;
                border-radius: 3vw;
        }
        `;
export const ButtonStart = styled.button`
        font-size: 1.5vw;
        padding: 0.5vw;
        border-radius: 1vw;
        background-color: purple;
        color: white;
        text-transform:uppercase;
        @media ${'(max-width:420px)'}  {
                font-size: 4vw;
                padding: 2vw;
                border-radius: 3vw;
        }
        `;