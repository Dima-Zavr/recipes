import styled from "styled-components"

export const MyButton = styled.button`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: 100%;
  height: 56px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 16px;
  background: #82bd69;
  &:hover {
    background: #61a146;
  }
  &:active {
    background: #4c8435;
  }
`
export const BtnContainer = styled.div`
  position: fixed;
  bottom:20px;
  right: 20px;
  z-index: 1;
`