import Bolt from '../img/bolt.png'
import Header from './Header'
import LoginInfo from './LoginInfo'
import Input from './Input'
import GoogleBtn from './GoogleBtn'
import Showcase from './Showcase'
import SignEmail from './SignEmail'
import Graph from '../img/graph.png'
import LoginBtn from './LoginBtn'
import RadioBtn from './RadioBtn'


export const SignUp = () => {
     
    return (
        <div className="row">
          <div className="column">
            <div className="whiteCol">
              <div className="signIn">
              <img id="boltLogo" src={Bolt} alt=""></img>
              <Header header="Sign Up"/>
              <GoogleBtn>Sign up with Google</GoogleBtn>
              <SignEmail>Or Sign up with E-mail</SignEmail>
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
                  length="8"
                ></Input>
                <RadioBtn 
                  text="I agree to the "
                  id="agreed"
                  linktext="Terms and conditions"
                  href=""
                  required="true"
                />
                <LoginBtn type='submit' value="sign up">Sign up</LoginBtn>
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
                <img id="graphId" src={Graph} alt=""></img>
                <Showcase />
            </div>
          </div>
        </div>
    )
}

export default SignUp