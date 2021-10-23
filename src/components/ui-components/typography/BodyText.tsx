import styled from "styled-components"

type Props = {
    text: String,
    weight: string
}

const BodyText: React.FC<Props> = (Props) => {
    return(
        <div>
            {
                Props.weight === "500" ? <NormalText>{Props.text}</NormalText>
                : Props.weight === "600" ? <BoldText>{Props.text}</BoldText> :
                <ExtraBoldText>{Props.text}</ExtraBoldText>
            }
        </div>
    )
}


export default BodyText


const NormalText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`


const BoldText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`


const ExtraBoldText = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: #828282;
`