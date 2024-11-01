import { Outlet } from 'react-router-dom'
import NavTabs from './components/navTabs'

function App() {

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
        GitHub link <a href='https://github.com/johnc365' target='_blank'>here</a>
        <br></br>
        LinkedIn link <a href='https://www.linkedin.com/in/john-caldwell-376223336/' target='_blank'>here</a>
        <br></br>
        stackoverflow link <a href='' target='_blank'>here</a>
      </footer>

    </>
  )
}

export default App
