import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  margin: 40px 0 40px;
  overflow:hidden;
`
export const Container = styled.div`
  display: inline-flex;
  flex-direction:column;
  justify-content: center;
  max-width: 1440px;
  padding:0 40px;
  @media (max-width: 1439px){
    padding:0 30px;
  }
  @media (max-width: 1019px){
    padding:0 20px;
  }
`
export const Title = styled.p`
  margin: 16px 0;
  padding: 0 15px;
  color: #141c24;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`
export const Search = styled.input`
  font-size: 20px;
  background-color: #ffffff;
  padding: 15px 20px;
  margin-bottom: 15px; 
  border-radius: 20px;
  border: 1px solid #82bd69;
  &:focus{
    outline:none;
  }
`
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 310px 310px 310px 310px;
  gap: 40px 40px;
  list-style-type: none;
  @media (max-width: 1439px){
    grid-template-columns: 300px 300px 300px;
    gap: 40px 20px;
  }
  @media (max-width: 1019px){
    grid-template-columns: 300px 300px;
    gap: 30px 30px;
  }
  @media (max-width: 767px){
    grid-template-columns: 300px;
    gap: 20px;
  }
`
export const Content = styled.div`
  display:flex;
  width:100%;
  gap: 30px;
`
export const Imgs = styled.div`
  width: 50%;
  height: auto;
`
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  img {
      width: auto;
      height: 100%;
  }
`