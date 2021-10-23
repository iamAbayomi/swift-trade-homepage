import styled from "styled-components"

type Props ={
    type: string
}


const SingleTransactionCardText: React.FC<Props> = (Props) => {
    return(
        <HeadingText>{Props}</HeadingText>
    )
}

export default SingleTransactionCardText

const HeadingText = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;   
`