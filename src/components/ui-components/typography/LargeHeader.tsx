import styled from "styled-components"

type Props = {
    text: string,
    weight: string
}

const LargeHeader: React.FC<Props> = (Props) => {
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

export default LargeHeader


const NormalText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 700;
    font-size: 2.25em;
    line-height: 27px;
`

const BoldText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 700;
    font-size: 2.25em;
    line-height: 27px;
`

const ExtraBoldText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 700;
    font-size: 2.25em;
    line-height: 27px;
`