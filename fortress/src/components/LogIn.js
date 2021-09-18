import Bolt from '../img/bolt.png'
import Header from './Header'
import LoginInfo from './LoginInfo'
import Input from './Input'
import GoogleBtn from './GoogleBtn'
import Showcase from './Showcase'
import SignEmail from './SignEmail'
import Graph from '../img/graph2.png'
import LoginBtn from './LoginBtn'
import RadioBtn from './RadioBtn'

export const LogIn = () => {
     
    return (
        <div className="row">
        <div className="column">
          <div className="whiteCol">
            <div className="signIn">
            <img id="boltLogo" src={Bolt} alt=""></img>
            <Header header="Login"/>
            <GoogleBtn>Sign in with Google</GoogleBtn>
            <SignEmail>Or Sign in with E-mail</SignEmail>
            <form action="submit">
              <Input 
                label="E-mail"
                placeholder="mail@website.com"
              ></Input>
              <Input
              label="Password"
              placeholder="Min. 8 characters"
              ></Input>
            <RadioBtn 
            text="Remember me "
            id="remember"
            linktext="Forgot password?"
            href=""
            />
            </form>
            <LoginBtn>Login</LoginBtn>
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
              <img id="graphId" src={Graph} alt=""></img>
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