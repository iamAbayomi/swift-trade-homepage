import styled from "styled-components"

type Props = {
    text: string
}

const  BodyHeaderText: React.FC<Props> = (Props) =>{
    return(
            <HeadingText>{Props.text}</HeadingText>
    )
}

export default BodyHeaderText

const HeadingText =  styled.p `
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 27px;
`