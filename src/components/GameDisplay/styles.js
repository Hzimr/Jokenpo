import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const NameGame = styled.h1`
    margin: 2vw;
    text-transform:uppercase;
    color: crimson;
    font-size: 6vw;
    @media ${'(max-width:420px)'}  {
        font-size: 11vw;
    }
    `;


export const ContainerPlayers = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media ${'(max-width:420px)'}  {
        flex-direction :column ;
    }
    `;

    export const ContainerControls = styled.div`
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 2vw;
        `;

    export const Winner = styled.p`
        text-transform: uppercase;
        font-size: 3vw;
        @media ${'(max-width:420px)'}  {
            font-size: 6vw;
        }
    `
    
    export const ButtonGo = styled.button`
        font-size: 2.5vw;
        padding: 1vw;
        border-radius: 1vw;
        background-color:orangered;
        color: white;
        text-transform:uppercase;
        @media ${'(max-width:420px)'}  {
            font-size: 4vw;
            padding: 3vw;
            border-radius: 4vw;
            margin-top: 2vw;
            :hover{
                font-size: 5vw;
            }
        }
        `;
    export const ButtonAgain = styled.button`
            color: white;
            background-color:orangered;
            text-transform:uppercase;
            font-weight: 600;
            font-size: 2.5vw;
            padding: 1vw;
            border-radius: 1vw;
            margin-top: 1vw;
            :hover{
                font-size: 2.7vw;
            }
            @media ${'(max-width:420px)'}  {
                font-size: 4vw;
                padding: 3vw;
                border-radius: 4vw;
                margin-top: 2vw;
                :hover{
                    font-size: 5vw;
                }
            }
            `;
    export const ButtonNew = styled.button`
            font-size: 1.5vw;
            padding: 1vw;
            border-radius: 1vw;
            background-color:blue;
            margin-top: 1vw;
            color: white;
            text-transform:uppercase;
            font-weight: 600;
            :hover{
                font-size: 1.7vw;
            };
            @media ${'(max-width:420px)'}  {
                font-size: 3vw;
                padding: 3vw;
                border-radius: 4vw;
                margin-top: 2vw;
                :hover{
                    font-size: 5vw;
                }
            }
            `;
