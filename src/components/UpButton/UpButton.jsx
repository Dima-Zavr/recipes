import { HangButton } from "../Button/Button_components";

import { ArrowUpIcon } from "../../assets/ArrowUpIcon";

export const UpButton = () => (
    <HangButton onClick={() => window.scrollTo(0, 0)}>
        <ArrowUpIcon />
    </HangButton>
);
