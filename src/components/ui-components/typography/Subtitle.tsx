import styled from "styled-components"

type Props = {
    text: string,
    weight: string
}

const Subtitle: React.FC<Props> = (Props) =>{
    return(
        <div>
            {
                  Props.weight === "500" ? <NormalText>{Props.text}</NormalText>
                : Props.weight === "600" ? <BoldText>{Props.text}</BoldText> 
                : Props.weight === "600" ? <ExtraBoldText>{Props.text}</ExtraBoldText>
                : <ExtraLargeBoldText>{Props.text}</ExtraLargeBoldText>
            }
        </div>
    )
}

export default Subtitle


const NormalText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`


const BoldText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`



const ExtraBoldText = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`



const ExtraLargeBoldText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`