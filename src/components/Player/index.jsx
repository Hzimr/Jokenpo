import * as S from "./styles";
export default function Player({nome, ponto, imagem}){
    
    return (  
            <S.Container>
                <S.Name>{nome}</S.Name>
                <S.Image src={imagem}></S.Image>
                <S.Pont>Pontuação: {ponto}</S.Pont>                
            </S.Container>
    )
}