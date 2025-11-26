import React from "react";

import { MainPageBaseLogic } from "./MainPageBaseLogic";
import ContentMain from "../ContentMain";

class MainPageLogic extends MainPageBaseLogic {
    protected content!: JSX.Element;
    initContent(): void {
        this.content = React.createElement( ContentMain, null, null);
    }
}

export {MainPageLogic};