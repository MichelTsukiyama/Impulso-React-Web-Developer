import{useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import './App.css';
import narutoImg from '../src/images/naruto.png';
import bgImg from '../src/images/bg.jpeg';
import {Quotes} from './components';
import {getQuote} from './services/quotesService';
import jutsuSound from './sounds/src_sounds_jutso.mp3';

const audio = new Audio(jutsuSound);

function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({ quote: 'loading quote...', speaker: 'loading speaker...'});

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
    
  }

  useEffect(() => {
    onUpdate();

    return() => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes 
        quotes={quoteState.quote} //atalho {...quoteState} é a mesma coisa
        speaker={quoteState.speaker} 
        onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto with a Kunai"/>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items:center;
  background: url(${bgImg}) center no-repeat;
  background-size: cover;
  background-margin: 0;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  margin-left: 20px;
  align-self: flex-end;
`;

export default App;
