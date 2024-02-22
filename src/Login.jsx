import { Button, Card, Typography,TextField,Checkbox } from "@mui/material";
import PhoneNumber from "./Phonenumber";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import {useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
 return <div style={{
    marginTop:'7%',
    marginLeft:'35%',
    width:"425px",
    height:"460px",
    backgroundColor:"#ffffff",
    borderRadius:"10px",
  }}>
         <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% black
        zIndex: -1, // Placing it behind the content
      }}></div>
      

    <div style={{marginLeft:"15px",marginRight:"25px",display:"flex",justifyContent:"space-between"}}>
    <Typography onClick={()=>{
      navigate("/login")
    }}
     style={{marginTop:"15px",cursor:"pointer"}} variant="h4">Login</Typography>
    <img onClick={()=>{
      navigate("/")
    }}
     src="/src/images/close.png" style={{ height:"15px",width:"15px",marginTop:'25px',cursor:"pointer"}}/>
    </div>
 <div>
  <PhoneNumber/>
 </div>
    <div style={{ width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>
 <Button style={{width: "calc(100% - 30px)", display:"flex",alignItems:"center",backgroundColor:"#f05a69"}} variant="contained" >
Send One Time Password
</Button>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",marginLeft:"15px",marginRight:"15px"}}> 
  <hr style={{borderColor:'#e9ebed',borderWidth:'1px',width:"40%"}} />
  <Typography variant="body1" style={{margin:"0 10px",color:"#a5a5a5"}}>or</Typography>
  <hr style={{borderColor:'#e9ebed',borderWidth:'1px',width:"40%"}} />
 </div>

 <div style={{ width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>
 <Button style={{width: "calc(100% - 30px)", display:"flex",alignItems:"center",backgroundColor:"white",color:"black"}} variant="contained" >
 <img src="/src/images/mail.png" style={{ height:"25px",width:"25px",marginRight:"10px"}}/>
 Continue with Email
</Button>
 </div>

 <div style={{ width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>
 <Button style={{width: "calc(100% - 30px)", display:"flex",alignItems:"center",backgroundColor:"white",color:"black"}} variant="contained" >
 <img src="/src/images/google.png" style={{ height:"15px",width:"15px",marginRight:"10px"}}/>
  Sign in with Google
</Button>
 </div>
 <div style={{marginTop:"25px",marginLeft:"15px",marginRight:"15px"}}> 
  <hr style={{borderColor:'#e9ebed',borderWidth:'1px',width:"100%"}}/>
 </div>

 <div style={{marginLeft:"15px",marginTop:"15px"}}>
  <Typography >New to Zomato? <a 
   onClick={()=>{
    navigate("/signup")
   }}
   style={{cursor:"pointer",color:"#f05a69"}}>Create account</a></Typography>
 </div>

  </div>
}

export default Login