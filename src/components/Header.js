// import styled from 'styled-components'

export const Header = (props) => {
    
   
    return (
        <div>
            <div id="login">
                <h1>{props.header}</h1>
            </div>
            <div id="info">
                <p>See your growth and get consulting support!</p>
            </div>
        </div>
    )
}

export default Header