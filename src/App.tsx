import styled from "styled-components";
import {
  ExtendedBtn,
  StyledBtn,
} from "./styledComponent/base/Button.styled.tsx";
import { Link } from "./styledComponent/base/Link.styled.tsx";
import { StyledH1 } from "./styledComponent/base/H1.styled.tsx";
import { Menu } from "./styledComponent/base/Menu.styled.tsx";
import { myTheme } from "./styledComponent/Theme.styled.tsx";

function App() {
  return (
    <>
      <Menu>
        {/*ul>li.item*3>a[href=#]{navItem $}}*/}
        <ul>
          <li className="item">
            <a href="#">navItem 1</a>
          </li>
          <li className="item">
            <a href="#">navItem 2</a>
          </li>
          <li className="item">
            <a href="#">navItem 3</a>
          </li>
        </ul>
      </Menu>
      <StyledSection>
        <StyledH1>Styled Components</StyledH1>
        <span>asd</span>
        <span>123</span>
        <BoxBtn>
          <StyledBtn color={"white"} background={"green"} size={"1.7rem"}>
            Button
          </StyledBtn>
          <ExtendedBtn>Extended Button</ExtendedBtn>
          <StyledBtn background={"red"} as={"a"} href={"#"}>
            As Button
          </StyledBtn>
          <StyledBtn as={Link}>
            As <span>Link</span> Button
          </StyledBtn>
          <StyledBtn title={"asd"}>Props Button</StyledBtn>
          <StyledBtn primary btnType={"primary"}>
            Primary Button
          </StyledBtn>
          <StyledBtn outlined btnType={"outlined"}>
            Outlined Button
          </StyledBtn>
        </BoxBtn>
        <BoxBtn>
          <StyledBtn background={myTheme.color.primary}>Theme Btn 1</StyledBtn>
          <StyledBtn background={myTheme.color.secondary}>
            Theme Btn 2
          </StyledBtn>
          <StyledBtn background={myTheme.color.grey.dark}>
            Theme Btn 3
          </StyledBtn>
        </BoxBtn>
      </StyledSection>
    </>
  );
}

export default App;

const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  &:last-child {
    margin-top: 20px;
  }
  ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${StyledH1} {
    color: #ffffff;
    text-transform: uppercase;
    &:hover {
      cursor: zoom-in;
    }
  }
`;
