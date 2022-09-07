import { Stack } from "@mui/material"
import { categories } from "../../utils/constants"

const SideBar = () => {
  return (
    <Stack direction="row"
      sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories?.map(({ name, icon }) => (
        <button key={name}>
          <span>{icon}</span>
          <psan>{name}</psan>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar