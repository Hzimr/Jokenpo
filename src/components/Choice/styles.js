import styled from 'styled-components';

export const Container = styled.div`
    width:25vw;
    height:10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media ${'(max-width:420px)'}  {
        width:60vw;
        height:30vw;
    }
    `;
export const Title = styled.p`
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 1vw;
    @media ${'(max-width:420px)'}  {
        font-size: 6vw;
    }
    `;

export const ContainerChoice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;
export const ImageChoice = styled.img`
    transition-duration: 0.5s;
    width: 5vw;
    height: 5vw;
    :hover{
        width: 10vw;
        height: 10vw;
    }
    @media ${'(max-width:420px)'}  {
        width: 15vw;
        height: 15vw;
        :hover{
            width: 17vw;
            height: 17vw;
        }
    }
    `;