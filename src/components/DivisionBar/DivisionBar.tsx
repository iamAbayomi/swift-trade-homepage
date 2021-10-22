import './DivisionBar.css'

type props = {
    barcolor: string
}

const DivisionBar : React.FC<props> = (props) => {
    return(
        <div>
            <div className="divisionbar" style={{ borderColor: `${props.barcolor}` }}/>
        </div>
    )
}

export default DivisionBar