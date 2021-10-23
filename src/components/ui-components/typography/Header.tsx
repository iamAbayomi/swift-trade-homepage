import styled from "styled-components"


type Props ={
    text: string,
    weight: string
}

const Header: React.FC<Props> = (Props) => {

    return(
        <div>
            {
                Props.weight === "500" ? <NormalHeadingText>{Props.text}</NormalHeadingText>
                : Props.weight === "600" ? <BoldHeadingText>{Props.text}</BoldHeadingText> :
                <ExtraBoldHeadingText>{Props.text}</ExtraBoldHeadingText>
                
            }
        </div>
    )
}

export default Header

const NormalHeadingText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 1.13em;
    line-height: 27px;
`

const BoldHeadingText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 1.13em;
    line-height: 27px;
`
const ExtraBoldHeadingText = styled.p`
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 700;
    font-size: 1.13em;
    line-height: 27px;
`