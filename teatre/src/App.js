import {useState} from 'react';
import data from './data.json';
import {Wrapper,Title, Button,Container} from './styled'


function App(){
    const [text,setText]=useState(0);
    const next=()=>{
        if (text !==data.length -1){
            setText(text+1);
        }
    }


    const previous=()=>{

        if (text!==0){
            setText(text-1);
        }
    }

    return(

<>
    <div>
        <Title>
            Romeo & Julieta
        </Title>
        <Wrapper>
            {data[text]}
        </Wrapper>
        <Container>
            <Button onClick={next}>
                Next
            </Button>
            <Button onClick={previous}>
                Previous
            </Button>
        </Container>
    </div>
</>


    )


}






export default App;