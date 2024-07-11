import { createContext, useState } from "react"

export const DataContext = createContext()


export const DataProvider = ({ children }) => {
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <DataContext.Provider
      value={{
        login,
        setLogin,
        username,
        setUsername
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
