import React, { createContext, useContext, useState } from 'react'

const InfoContext = createContext();
export const Infoprovider = ({children})=>{
    const [userinfo, setuserinfo] = useState();
    const [preidctedinfo, setprediction] = useState();
    const [filepred, setfilepred] = useState();
    return(
        <InfoContext.Provider value={{userinfo,setuserinfo,preidctedinfo,setprediction,filepred,setfilepred}}>
            {children}
        </InfoContext.Provider>
    )
}

export const useInfocontext = ()=>{
    return useContext(InfoContext);
}