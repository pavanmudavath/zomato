import { Card ,Typography,Button} from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
    const navigate=useNavigate(); 
  return <Card style={{height:"100px" }}>
    
    <div className='top-appbar'>
        <Typography variant="h1" style={{fontSize:"50px",fontWeight:"bold"}}>zomato</Typography>
        <div>
        <Card   style={{width:"800px" , height:"50px", marginTop:"10px",display:"flex", alignContent:"center"}}>
          <div class="card-content">
                <img src="/src/images/placeholder.png" alt='location-icon'width="20px" height="20px" />
                <input type="search" className='searchInput' placeholder="Hyderabad"></input>
                <img src="/src/images/down.png" alt='location-icon'width="15px" height="15px" />
         </div>
         <div style={{ width:"2px",height:"50px", backgroundColor:"#ebebeb" , margin:"5px 0"}}></div>
          <div class="card-content1" style={{ flexGrow: 1 }}>
                <img src="/src/images/magnifying-glass.png" alt='location-icon'width="20px" height="20px" />
                <input type="search" className='searchInput' placeholder="Search for restaurant, cuisine or a dish" style={{ width: "100%" }}></input>
         </div>
        </Card>
        </div>
        <div>
        <Button style={{width:"75px", height:"35px",  marginTop:"10px",marginRight:"10px",color:"black"}}
        onClick={()=>{
            navigate("/login")
        }}>Login</Button>

        <Button style={{width:"75px", height:"35px", marginTop:"10px",color:"black"}}
        onClick={()=>{
            navigate("/signup")
        }}
        >SignUp</Button>
        </div>
    </div>
        
    </Card>
}

export default AppBar