import React, {Component} from 'react';
import  styled,{ createGlobalStyle, ThemeProvider } from 'styled-components';
import themes from './themes'

export const GlobalStyle = createGlobalStyle`
  html {
    padding:0;
    margin:0;
  }
`;
const Container =styled.div`
  height:100vh;
  width:100%;
  background-color:pink;
`;
const Card = styled.div`
  background-color:white;

`;
const Button = styled.button`
  border-radius:30px;
  padding:25px 15px;
  background-color: ${props => props.theme.successColor}
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes}>
      <Container>
        <Form />
      </Container>
     </ThemeProvider>
    );
  }   
}
const Form =()=>(
  <Card>
    <Button>hello</Button>
  </Card>
)


export default App;
