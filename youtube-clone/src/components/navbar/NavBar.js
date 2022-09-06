import { Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { logo } from '../../utils/constants'

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between' }}>
      <NavLink to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
      </NavLink>
    </Stack>
  )
}

export default NavBar