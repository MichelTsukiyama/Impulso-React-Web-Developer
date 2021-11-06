import styled from 'styled-components';
import {string} from 'prop-types';

export const Button = styled.button`
    background: #dc872c;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    max-width: 300px;

    &:hover {
        background: #a40000;
    }
`