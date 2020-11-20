import React from 'react'; 
import { GenericFunc } from '../global';

export type IGlobalState = {
    tokens?: {accessToken:string,refreshToken:string};
    googleUser?:any;
    discordUser?:any;
};

type ICurrentGlobalContext = [IGlobalState, React.Dispatch<React.SetStateAction<IGlobalState>>];

const GlobalState = React.createContext<ICurrentGlobalContext>([{}, () => {}]); 
export default GlobalState;