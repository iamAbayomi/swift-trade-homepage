import { ChangeEventHandler } from "react";
import styled from "styled-components";

type Props ={
    type: string,
    placeholder: string,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}


const InputField: React.FC<Props> = (Props) => {
    return(
        <div>
            <EditField
                type={Props.type}
                placeholder={Props.placeholder}
                value={Props.value}
                onChange={Props.onChange}
            />
        </div>
    )
}

export default InputField;


const EditField = styled.input `
    width: 250px;
    height: 44px;
    display: block;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 20px ;
    border-color:#c7d3e6;
    border-radius: 4px;
    border-style: solid;
`