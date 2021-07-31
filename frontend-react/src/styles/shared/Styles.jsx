import styled from "@emotion/styled";

const paddingMobile = "0 16px";
const paddingDesktop = "0 90px";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: ${paddingMobile};
  margin: 0;
  @media (min-width: 1200px) {
    padding: ${paddingDesktop};
  }
`;

export const Button = styled.button`
  background-color: #00109b;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 15px 15px;
  font-size: 18px;
  transition: box-shadow 100ms;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;
