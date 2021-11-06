import {rest} from 'msw'; //tive que instalar o Mock service
import{setupServer} from 'msw/node';
import {getQuote} from './quotesService';

const response = {test: 'testing'};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transform json resposta into object', async () =>{
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);
});
