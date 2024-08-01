import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #82bd69;
`
export const Container = styled.div`
  max-width: 1360px;
  display: flex;
  align-items: center;
  height: 120px;
  padding: 0 40px;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 1019px) {
    height: 100px;
  }
  @media (max-width: 767px) {
    height: 80px;
    justify-content: center;
  }
`
export const Logo = styled.img`
  height: 100px;
  width: auto;
  @media (max-width: 1019px) {
    height: 80px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const MyLink = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  padding: 10px;
  &:hover {
    color: #82bd69;
  }
`
