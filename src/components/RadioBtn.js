// import styled from 'styled-components'

export const RadioBtn = (props) => {
    
    return (
            <label className="radioLabel">
            <input type="checkbox" id={props.id} name={props.id} value={props.id} required={props.required}></input>
            <span>{props.text}<a id={props.forgot} href={props.href}>{props.linktext}</a></span>
            </label>
    )
}

export default RadioBtn