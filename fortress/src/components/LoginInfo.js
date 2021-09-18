export const LoginInfo = (props) => {
    
   
    return (
        <div>
            <div id="notRegistered">
                <p>{props.info}<a href="/signup">Create an account</a></p>
            </div>
        </div>
    )
}

export default LoginInfo