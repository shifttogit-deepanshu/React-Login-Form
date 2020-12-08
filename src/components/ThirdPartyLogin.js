import React from 'react';
import Google from "./Google";
import Github from "./Github"

export const ThirdPartyLogin = ()=>(
    <div className="third_party_login">
    <div className="head-text head-text--welcome">Welcome!</div>
    <div className="head-text head-text--welcome head-text--font">Hey! It's good to see you on board. Before getting started, please authenticate using your registered Email and password or log in usng thirg party login services</div>
    <Google/>
    <Github/>
    </div>
)
export default ThirdPartyLogin 
