import styled from "styled-components";

export const Menu = styled.nav`
  background: #1c1c1c;
  ul {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    li > a {
      color: #535bf2;
    }
    li + li {
      margin-left: 10px;
    }
  }
`;
