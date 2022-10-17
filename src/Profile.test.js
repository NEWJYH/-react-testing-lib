import React from "react";
import {render} from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="NEWJYH" name="정영훈"/>);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="NEWJYH" name="정영훈"/>);
        // utils.getBytText
        utils.getByText("NEWJYH"); //랜더 된 결과에서 찾아봄
        utils.getByText("(정영훈)"); // 랜더 된 결과에서 문자가 있는 지 확인하는 로직
        // utils.getByText("NEWJYH (정영훈)"); // 텍스트가 알아서 검색됨 
    });
});