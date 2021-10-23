import styled from "styled-components";

function Card(){
    return(
        <Cards className="card-white">
            <div>
                <p>Card white</p>
            </div>
        </Cards>
    )
}

export default Card;

const Cards = styled.div`
    width: 500px;
    background-color: white;
    padding: 20px 20px 10px 30px;
    border-radius: 10px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
`