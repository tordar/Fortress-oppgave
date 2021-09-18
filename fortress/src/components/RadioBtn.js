// import styled from 'styled-components'

export const RadioBtn = (props) => {
    
   
    return (
        <div>
        <input type="radio" id={props.id} name={props.id} value={props.id}></input>
            <label for={props.id}>{props.text}</label>
            <span><a href={props.href}>{props.linktext}</a></span>
        </div>
    )
}

export default RadioBtn