import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { normal } = fontSize;

export const BigButton = styled.button`
  font-size: ${normal};
  height: 45px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;
/*
export const BigButton = styled.button`
    background: ${({color})=>buttonColor[color] && buttonColor[color][0]};
    color: ${({color})=> buttonColor[color]&&buttonColor[color][1]};
`;
*/

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }
  button + button {
    margin-left:5px; 
  } //첫번째 요소 제외 이후 요소들은 전부 적용
`;
