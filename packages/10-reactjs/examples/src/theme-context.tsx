import { createContext, FC, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void }>({
  theme: 'light',
  setTheme: () => {}
})

export const ThemeContextComponent: FC = () => {
  const [theme, setTheme] = useState<Theme>('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ComponentA />
    </ThemeContext.Provider>
  )
}

const ComponentA: FC = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <h2>{theme}</h2>
      <ComponentB />
    </>
  )
}

const ComponentB: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    </>
  )
}
