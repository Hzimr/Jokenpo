import * as S from "./styles";
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"

export default function Choice({optionsChoices, setChoiceP}){
    
    return (  
            <S.Container>
              <S.Title>Faça sua escolha!</S.Title>  
              <S.ContainerChoice>
                <S.ImageChoice src={pedra} onClick={()=>{setChoiceP(optionsChoices[0])}} />
                <S.ImageChoice src={papel} onClick={()=>{setChoiceP(optionsChoices[1])}}/>
                <S.ImageChoice src={tesoura} onClick={()=>{setChoiceP(optionsChoices[2])}}/>

              </S.ContainerChoice>
            </S.Container>
    )
}