import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 45vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 35vh;
    padding: 0 3vw;
  }
`

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const Title = styled.div`
  margin-top: 0.5vh;
  font-size: 2.3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export { Background, Wrapper, SubTitle, Title }
