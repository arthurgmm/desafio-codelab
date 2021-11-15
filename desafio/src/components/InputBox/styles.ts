import styled from 'styled-components';
import { Send } from '@styled-icons/fluentui-system-filled';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
`;

export const Input = styled.input`
    width: 90%;
    height: 40px;

    padding: 5px;
    margin: 0 7px 0 0;
    border: 2px solid rgb(0, 0, 0, 0.5);
    border-radius: 5px;
`;

export const SendIcon = styled(Send)`
  width: 27px;
  height: 27px;
  cursor: pointer;

  color: #000;    
`;