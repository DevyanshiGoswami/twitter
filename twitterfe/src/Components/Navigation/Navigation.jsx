import React from 'react'
import { navigationMenu } from '../Navigation/NavigationMenu'
import {useNavigate} from 'react-router-dom'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



const Navigation = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate=useNavigate();
  const handleLogout=()=>{
    console.log("logout")
    handleClose()
  }
  return (
    <div className='h-screen sticky top-0'>
      <div>
      <div className='py-5'>
        <svg height='30' width='30' viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-18jsvk2 r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>
      <div className='space-y-6'>
        {navigationMenu.map((item)=><div className='cursor-pointer flex space-x-3 items-center' onClick={()=>item.title==="Profile"?navigate('/profile/${5}'):navigate(item.path)}>
           
            <p className='text-xl'> {item.icon}{item.title}</p>
        </div>)}
      </div>
      <div className='py-10'>
        <Button sx={{width:"100%",borderRadius:"29px",py:"15px",bgcolor:'#1e88e5'}}variant='contained'>
          Tweet
        </Button>
      </div>
    </div>

    <Avatar alt="username"
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s'/>

    <div className='flex flex-col'>
       <span className='block'>Alex</span>
      <span className='block opacity-70'>@Alex</span>
    </div>
   
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <MoreHorizIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
</div>
  );
}

export default Navigation;
