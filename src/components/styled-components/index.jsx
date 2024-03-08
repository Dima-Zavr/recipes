import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0 40px;
  overflow: hidden;
`
export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  padding: 0 40px;
  @media (max-width: 1439px) {
    padding: 0 30px;
  }
  @media (max-width: 1019px) {
    padding: 0 20px;
  }
`
export const Title = styled.p`
  margin: 16px 0;
  color: #141c24;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
`
