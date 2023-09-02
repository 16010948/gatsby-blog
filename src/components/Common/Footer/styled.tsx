import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 5.5vh 0;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export { FooterWrapper }
