import React , {createContext , useState} from 'react'

export const CaptainDataContext = createContext();

function CaptainContext({children}) {

    const [captain, setCaptain] = useState("");

  return (
    <div>
        <CaptainDataContext.Provider value={{captain , setCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext