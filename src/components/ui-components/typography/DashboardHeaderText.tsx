import styled from "styled-components"

type Props = {
    text: string
}

const  DashboardHeaderText: React.FC<Props> = (Props) =>{
    return(
            <HeadingText>{Props.text}</HeadingText>
    )
}

export default DashboardHeaderText

const HeadingText =  styled.p `
    color: rgba(1, 0, 102, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 1.13em;
    line-height: 27px;
`