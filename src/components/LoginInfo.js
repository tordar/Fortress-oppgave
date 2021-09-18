export const LoginInfo = (props) => {
    
   
    return (
        <div>
            <div id="notRegistered">
                <p>{props.info}<a href={props.href}>{props.linkText}</a></p>
            </div>
        </div>
    )
}

export default LoginInfo