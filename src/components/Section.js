import styled from "styled-components";

const StyledSection = styled.section`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
  padding: 0 8px;
`;

export const Section = ({ children, className }) => {
  return <StyledSection className={className}>{children}</StyledSection>;
};