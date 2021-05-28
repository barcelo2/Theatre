import styled ,{createGlobalStyle} from 'styled-components';
import image from '../src/couple.jpg';


export const Main = createGlobalStyle`
	body {
    background-size: 100%;
    width: 100%;
    height:100%;
    position:relative;
    background-image: url(${image});
    background-repeat: no-repeat;

	}
`;

export const Title = styled.h1`
  font-size: 5rem;
  padding-top: 5.5rem;
  font-family: 'Dancing Script';
  text-align: center;
  color: #a35709;
  animation-name: MoveInLeft;
   animation-duration: 1s;
   animation-timing-function: ease-out;

   @keyframes MoveInLeft{
    0%{
 opacity: 0;
 transform:translateX(-10rem);
    }
 
    80%{
 
    transform:translateX(1rem)
    }
    100%{
 opacity: 1;
 transform:translateX(0);
    }
 
 }
`;

export const Wrapper = styled.section`
  padding-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Dancing Script';
  font-weight: 600;
  color: #f0e3ca;
  animation-name: MoveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-out;



  @keyframes MoveInRight{
    0%{
 opacity: 0;
 transform:translateX(10rem);
    }
 
    80%{
 
    transform:translateX(-1rem)
    }
    100%{
 opacity: 1;
 transform:translateX(0);
    }
 
 }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #a35709;
  color: #f0e3ca;
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 0.4rem;
  margin: 1.5em;
  cursor: pointer;
  border:none;
  font-family:'Dancing Script';
  
  
`;


