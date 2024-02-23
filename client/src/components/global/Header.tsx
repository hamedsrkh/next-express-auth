import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LoginButton from '@/components/global/LoginButton'

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chat Application
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header
