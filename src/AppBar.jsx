import { Button, Card, Typography } from '@mui/material'
import React from 'react';
import Location from "../src/location.jsx"
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Card style={{width:"100%",height:"75px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img  src='../src/images/b40b97e677bc7b2ca77c58c61db266fe1603954218 (1).avif' alt='zomato' style={{width:"130px",height:"27px",marginRight:"20px"}}/>
            <Card style={{width:"650px",height:"55px",marginRight:"70px",display:"flex",alignItems:"center"}}>
                <img src='../src/images/placeholder.png' alt='location' style={{width:"22px",marginLeft:"10px"}}/>
                <Location/>
                <div style={{ width:"1px",height:"20px", backgroundColor:"#ebebeb" , marginLeft:"-80px"}}></div>
          <div class="card-content1" style={{ flexGrow: 1 }}>
                <img src="/src/images/magnifying-glass.png" alt='location-icon' style={{width:"25px",marginRight:"10px"}} />
                <input type="search" className='searchInput' placeholder="Search for restaurant, cuisine or a dish" style={{ width: "100%" }}></input>
         </div>
            </Card>
            <Button style={{width:"70px",color:"#838383"}}
            onClick={()=>{
                navigate("/login")
            }}
            >Log in</Button>
            <Button style={{width:"80px",color:"#838383"}}
            onClick={()=>{
                navigate("/signup")
            }}
            >Sign Up</Button>
            

        </Card>
        <Card style={{width:"100%",height:"90px",display:"flex"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
            <Card style={{width:"60px",height:"60px",borderRadius:"30px",marginLeft:"260px",marginTop:"8px",backgroundColor:"#f8f8f8",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src='../src/images/78d25215ff4c1299578ed36eefd5f39d1616149985.avif' alt='plate-img' style={{height:"40px",width:"40px"}}/>
            </Card>
            <Typography variant='h6' style={{color:"#6a6a6a",marginLeft:"10px"}}>Dining Out</Typography>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
            <Card style={{width:"60px",height:"60px",borderRadius:"30px",marginLeft:"20px",marginTop:"8px",backgroundColor:"#f8f8f8",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src='../src/images/246bbd71fbba420d5996452be3024d351616150055.webp' alt='plate-img' style={{height:"40px",width:"40px"}}/>
            </Card>
            <Typography variant='h6' style={{color:"#6a6a6a",marginLeft:"10px"}}>Delivery</Typography>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
            <Card style={{width:"60px",height:"60px",borderRadius:"30px",marginLeft:"20px",marginTop:"8px",backgroundColor:"#f8f8f8",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src='../src/images/01040767e4943c398e38e3592bb1ba8a1616150142.webp' alt='plate-img' style={{height:"40px",width:"40px"}}/>
            </Card>
            <Typography variant='h6' style={{color:"#6a6a6a",marginLeft:"10px"}}>NightLife</Typography>
            </div>
        </Card>
    </div>
  )
}

export default AppBar