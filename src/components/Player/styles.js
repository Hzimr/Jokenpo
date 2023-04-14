import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: yellowgreen;
    width: 30vw;
    height: 20vw;
    padding: 2vw;
    border-radius: 2vw;
    @media ${'(max-width:420px)'}  {
        width: 70vw;
        height: 75vw;
        padding: 2vw;
        border-radius: 7vw;
    }
`;
export const Name = styled.p`
    text-align: center;
    width:max-content;
    text-transform: uppercase;
    font-size: 3vw;
    margin-bottom: 1vw;
    font-weight: 700;
    @media ${'(max-width:420px)'}  {
        font-size: 7vw;
        margin-bottom: 1vw;
        font-weight: 700;
    }
    `;
export const Image = styled.img`
    width: 10vw;
    height: 10vw;
    @media ${'(max-width:420px)'}  {
        width: 50%;
        height: 50%;
    }
    `
export const Pont = styled.p`
    font-size: 2vw;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 2vw;
    @media ${'(max-width:420px)'}  {
        font-size: 7vw;
        margin-bottom: 1vw;
        font-weight: 700;
    }
    `;
