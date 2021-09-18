import Bolt from '../img/bolt.png'
import Header from './Header'
import LoginInfo from './LoginInfo'
import Input from './Input'
import GoogleBtn from './GoogleBtn'
import Showcase from './Showcase'

export const LogIn = () => {
     
    return (
        
        <div className="row">
        <div className="column">
          <div className="whiteCol">
            <div className="signIn">
            <img id="boltLogo" src={Bolt} alt=""></img>
            <Header header="Login"/>
            <GoogleBtn>Sign in with Google</GoogleBtn>
            <div>Or Sign in with E-mail</div>
            <form action="submit">
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
            info="Not registered yet? "
            href="/signup"
            linkText="Create an account"
            />
            </div>
          </div>
          </div>
        <div className="column">
          <div className="blueCol">
          <div>
            graphs
          </div>
          <div>
            <Showcase />
          </div>
        </div>
      </div>
      </div>
      
            
        
    )
}

export default LogIn