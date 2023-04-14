import { useState } from "react";
import * as S from "./styles";
import SelectPlayer from "../SelectPlayer";
import Player from "../Player";
import Choice from "../Choice";
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"
import interroga from "../../assets/interroga.png"

export default function GameDisplay(){
    const [nome,setNome]=useState("");
    const [start,setStart]=useState(false);
    

    const [pontoP,setPontoP]=useState(0);
    const [pontoC,setPontoC]=useState(0);

    const [choiceP, setChoiceP]=useState(undefined);
    const [choiceC, setChoiceC]=useState(undefined);
    const [winner, setWinner]=useState(undefined);

    const optionsChoices=[
        {
            nome:"pedra",
            imagem:pedra
        },
        {
            nome:"papel",
            imagem:papel
        },
        {
            nome:"tesoura",
            imagem:tesoura
        },
    ]

    !winner && choiceC && choiceP && setWinner(findWinner(choiceP, choiceC))

    function escolhaC(){
        const escolha=Math.floor(Math.random()*3);
        setChoiceC(optionsChoices[escolha])
    };

    function reset() {
        setChoiceC(undefined)
        setChoiceP(undefined)
        setWinner('')
    };

    function restart() {
        setChoiceC(undefined)
        setChoiceP(undefined)
        setPontoC(0)
        setPontoP(0)
        setWinner('')
        setNome('')
        setStart(false)
    };

    function findWinner(choiceP, choiceC){
        if (choiceC.nome === choiceP.nome){
            return "empate";
        } else if (choiceP.nome === 'pedra') {
            if (choiceC.nome === "papel") {
                setPontoC(pontoC + 1 )
                return "computer";
            } else {
                setPontoP(pontoP + 1)
                return nome;
              }
            } else if (choiceP.nome === "papel") {
              if (choiceC.nome === "tesoura") {
                setPontoC(pontoC + 1)
                return "computer";
              } else {
                setPontoP(pontoP + 1)
                return nome;
              }
            } else if (choiceP.nome === "tesoura") {
              if (choiceC.nome === "pedra") {
                setPontoC(pontoC + 1)
                return "computer";
              } else {
                setPontoP(pontoP + 1)
                return nome;
              }
        }
    }


    return (  
            <S.Container>
               <S.NameGame>JOKENPO</S.NameGame>
               {!start && 
                    <SelectPlayer nome={nome} setNome={setNome} setStart={setStart} /> 
               }
               {start &&
                    <S.ContainerPlayers>
                    <Player nome={nome} ponto={pontoP} imagem={choiceP?choiceP.imagem:interroga} />
                    <S.ContainerControls>
                        {!choiceP&&
                            <Choice optionsChoices={optionsChoices} setChoiceP={setChoiceP}/>

                        }
                        {winner &&
                            <>
                                <S.Winner>Vencedor: {winner}</S.Winner>
                                <S.ButtonAgain onClick={() => { reset() }}>Jogar novamente</S.ButtonAgain>
                                <S.ButtonNew onClick={() => { restart() }}>Novo Jogador</S.ButtonNew>
                            </>
                        }
                        {!winner && choiceP && 
                            <S.ButtonGo onClick={() => {escolhaC()}}>Jokenpo!</S.ButtonGo>
                        }
                        
                    </S.ContainerControls>
                    <Player nome={"Computer"} ponto={pontoC} imagem={choiceC?choiceC.imagem:interroga} />

                    </S.ContainerPlayers>
               }
               

            </S.Container>
    )
}