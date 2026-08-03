import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Dashboard</Link>{' '}
          <Link to="/login">Login</Link>{' '}
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout