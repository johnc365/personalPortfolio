import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavTabs from './components/navTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        John Caldwell
        <NavTabs />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* {links to github linkedin and a third platform} */}
      </footer>

    </>
  )
}

export default App
