import styled, { css } from "styled-components";
import { Animation } from "../animation/Animation.tsx";

type StyledBtnPropsType = {
  background?: string;
  color?: string;
  size?: string;
  primary?: boolean;
  outlined?: boolean;
  btnType?: "primary" | "outlined";
};

export const StyledBtn = styled.button.attrs(({ title }) => ({
  title: title || "123",
}))<StyledBtnPropsType>`
  border-radius: 4px;
  border: 2px solid #1e1e1e;
  background: ${(props) => props.background || "#eee"};
  color: ${(props) => props.color || "#181818"};
  padding: 15px 20px;
  font-size: ${(props) => props.size || "1rem"};
  font-weight: bold;
  span {
    color: red;
  }
  &:hover {
    cursor: pointer;
  }

  &:last-child {
    background: #eae534;
  }
  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      border: 5px solid black;
    `}
  ${(props) =>
    props.outlined &&
    css<StyledBtnPropsType>`
      border: 5px solid red;
    `}
  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      border: 5px solid black;
    `}
  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnPropsType>`
      border: 5px solid red;
    `}
`;

export const ExtendedBtn = styled(StyledBtn)`
  border: 2px solid #55b524;
  background: #cc4747;
  &:hover {
    animation: ${Animation} 2s ease-in infinite;
  }
`;
