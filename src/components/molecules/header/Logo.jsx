import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className='flex'>
      <Link to="/">
        <img src="https://ed.team/imagenes/logo/logo-monocolor.svg" alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo