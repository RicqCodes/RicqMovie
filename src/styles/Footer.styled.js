import styled from "styled-components";

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.secondaryColor};
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontPrimary};
  flex-direction: column;
  margin-top: 10rem;
  mask-image: linear-gradient(360deg, #000 80%, transparent);
`;

export default StyledFooter;
