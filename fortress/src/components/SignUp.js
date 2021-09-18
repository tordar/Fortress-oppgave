import Bolt from '../img/bolt.png'
import Header from './Header'
import LoginInfo from './LoginInfo'
import Input from './Input'
import GoogleBtn from './GoogleBtn'

export const SignUp = () => {
     
    return (
        
        <div className="row">
        <div className="column">
          <div className="whiteCol">
            <div className="signIn">
            <img id="boltLogo" src={Bolt} alt=""></img>
            <Header header="Sign Up"/>
            <GoogleBtn>Sign up with Google</GoogleBtn>
            <div>Or Sign up with E-mail</div>
            <form action="submit">
                <Input 
                label="Name"
                placeholder="Name"
              ></Input>
              <Input 
                label="E-mail"
                placeholder="mail@website.com"
              ></Input>
              <Input
              label="Password"
              placeholder="Min. 8 characters"
              ></Input>
            </form>
            <LoginInfo 
            info="Already have an account? "
            href="/login"
            linkText="Sign in"
            />
            </div>
          </div>
          </div>
        <div className="column">
          <div className="blueCol">
        </div>
      </div>
      </div>
      
            
        
    )
}

export default SignUp