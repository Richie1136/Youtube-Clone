import { Stack } from "@mui/material"
import { categories } from "../../utils/constants"


const selected = 'New'

const SideBar = () => {
  return (
    <Stack direction="row"
      sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories?.map(({ name, icon }) => (
        <button className='category-btn' key={name} style={{ backgroundColor: name === selected && '#FC1503', color: 'white' }}>
          <span>{icon}</span>
          <psan>{name}</psan>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar