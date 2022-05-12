import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 0 10px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border: 1px solid #00a8ff;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 5px 10px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border: 1px solid #00a8ff;
    }
`;

export default Input;