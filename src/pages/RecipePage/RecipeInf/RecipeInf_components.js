import styled from "styled-components"

export const Container = styled.div`
    width: 450px;
`
export const Title = styled.h1`
    text-align: center;
`
export const Weight = styled.span`
    font-weight: 700;
`
export const Blocks = styled.div`
    margin: 32px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 24px;
`
export const Block = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #61a146;
    border-radius: 16px;
    color: white;
`
export const HeartBlock = styled(Block)`
    &:hover {
        cursor: pointer;
    }

    &:hover svg {
        color: #d9544d;
    }
`

export const Table = styled.table`
    thead {
        color: ${({ theme }) => theme.colors.font};
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2;
    }

    tbody {
        color: ${({ theme }) => theme.colors.font};
        text-align: center;
        font-size: 16px;
    }

    td {
        width: 50%;
        border-bottom: 1px dashed ${({ theme }) => theme.colors.font};
        text-align: left;
        padding: 8px;
        border-right: 1px dashed ${({ theme }) => theme.colors.font};

        &:first-child {
            border-left: none;
        }

        &:last-child {
            border-right: none;
        }
    }

    tbody tr td {
        border-bottom: none;
    }
`
