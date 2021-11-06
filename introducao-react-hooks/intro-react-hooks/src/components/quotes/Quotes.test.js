import {render, screen} from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import {Quotes} from './Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getAllByText(`- ${speaker}`);
    const buttonEl = screen.getByRole('button');
});

test('calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote = {quote} speaker={speaker} onUpdate={callback} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(1);
});