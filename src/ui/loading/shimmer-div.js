import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
    0% {
        background-position: -1000px;
    }
    100% {
        background-position: 1000px;
    }
`;
const StyledDiv = styled.div`
    border-radius: 6px;
    margin: 4px;
    background: #e8e3e3;
    width: ${props => props.width};
    height: ${props => props.height};
    background: linear-gradient(to right, #f6f7f8 8%, #edeef1 38%, #f6f7f8 54%);
    animation: ${shimmerAnimation} 10s linear infinite; 
`;

export const ShimmerDiv = ({ w, h }) => {
    return <StyledDiv width={w} height={h} />;
}