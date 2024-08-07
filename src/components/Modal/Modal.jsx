import * as S from "./Modal_components"
import { CloseIcon } from "../../assets/CloseIcon"

export const Modal = ({ children, onClose }) => {
    return (
        <S.Modal>
            <S.ModalContent>
                <S.Close onClick={() => onClose()}>
                    <CloseIcon />
                </S.Close>
                {children}
            </S.ModalContent>
        </S.Modal>
    )
}
