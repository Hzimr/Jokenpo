import * as S from "./styles";

export default function SelectPlayer({nome, setNome, setStart}){

    const atualizaNome=(event)=>{
        setNome(event.target.value)
    }
    
    return (  
            <S.Container>
                <S.LabelPlayer htlmFor="name">Nome do Jogador {nome} </S.LabelPlayer>
                <S.InputPlayer id="name" maxLength={12} value={nome} onChange={atualizaNome}/>
                {
                    nome&&<S.ButtonStart onClick={()=>setStart(true)}>Iniciar partida</S.ButtonStart>
                }                    
            </S.Container>
    )
}