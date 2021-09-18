// import styled from 'styled-components'

export const Input = (props) => {
    
   
    return (
        <div>
            <label for={props.label}>{props.label}</label><br></br>
            <input type="text" id={props.label} name={props.label} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input