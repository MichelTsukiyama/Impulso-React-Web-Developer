import styled from 'styled-components';
import {string, func} from 'prop-types';
import {Button} from '../buttons';

export const Quotes = ({quote, speaker, onUpdate}) => {
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote No Justsu!</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-itens: center;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: rigth;
    margin-bottom: 50px;
`;