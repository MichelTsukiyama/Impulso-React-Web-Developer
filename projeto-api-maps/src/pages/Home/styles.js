import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${props => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 16px;
    // npm install @material/react-text-field (pesquisar por material-react-text-field)
`;

export const Logo = styled.img`
    margin-bottom: 15px;
    padding: 0 50px;
    max-width: 70%;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

//Ao estilizar um componente colocar entre parenteses
export const Carousel = styled(Slider)` 
    .slick-slide{
        margin-right: 30px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.fonts.text};
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.fonts.text};
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;
`;
