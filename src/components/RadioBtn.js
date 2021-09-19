// import styled from 'styled-components'

export const RadioBtn = (props) => {
    
   
    return (
        
            <label className="radioLabel">
            <input type="radio" id={props.id} name={props.id} value={props.id}></input>
            <span>{props.text}<a href={props.href}>{props.linktext}</a></span>
            </label>
    )
}

export default RadioBtn