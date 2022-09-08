import { Stack } from "@mui/material"
import { categories } from "../../utils/constants"


const SideBar = ({ selected, setSelected }) => {



  return (
    <Stack direction="row"
      sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories?.map(({ name, icon }) => (
        <button onClick={() => setSelected(name)} className='category-btn' key={name} style={{ backgroundColor: name === selected && '#FC1503', color: 'white' }}>
          <span style={{ color: name === selected ? 'white' : 'red', marginRight: '20px' }}>{icon}</span>
          <span style={{ opacity: name === selected ? '1' : '0.7' }}>{name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar