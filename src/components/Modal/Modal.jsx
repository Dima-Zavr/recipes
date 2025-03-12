import { Background, Close } from "../../styles/components";
import { MyModal } from "./Modal_components";

import { CloseIcon } from "../../assets/CloseIcon";

export const Modal = ({ children, onClose }) => {
    return (
        <Background>
            <MyModal>
                <Close onClick={() => onClose()}>
                    <CloseIcon />
                </Close>
                {children}
            </MyModal>
        </Background>
    );
};
