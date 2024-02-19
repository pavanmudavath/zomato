import { Button, Card, Typography,TextField,Checkbox } from "@mui/material";
import { useState } from "react";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp = () => {
  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [isFilled,setIsFilled]=useState(false);

  const handleFullNameChange=(event)=>{
    setFullName(event.target.value);
    checkFilled();
  }

  const handleEmailChange=(event)=>{
    setEmail(event.target.value);
    checkFilled();
  }

  const checkFilled=()=>{
    if(fullName.trim()!=='' && email.trim()!==''){
      setIsFilled(true);
    }
    else{
      setIsFilled(false);
    }
  };

  return <div style={{
    marginTop:'7%',
    marginLeft:'35%',
    width:"425px",
    height:"550px",
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
    <Typography style={{marginTop:"15px"}} variant="h4">Login</Typography>
    <img src="/src/images/close.png" style={{ height:"15px",width:"15px",marginTop:'25px'}}/>
    </div>
    <div style={{width:"100%",marginTop:"30px"}}>
    <TextField style={{ width: "calc(100% - 30px)", marginRight: "15px", marginLeft: "15px",marginBottom:"20px" }} label="Full Name" value={fullName} onChange={handleFullNameChange}/>
    <TextField style={{ width: "calc(100% - 30px)", marginRight: "15px", marginLeft: "15px" }} label="Email" value={email} onChange={handleEmailChange}/>
 </div>
 <div style={{display:"flex",marginTop:"20px",marginLeft:"5px",marginRight:"15px"}}>
 <Checkbox  {...label} defaultChecked />
 <Typography style={{marginTop:"10px",color:"#a5a5a5"}} variant="h">I agree to Zomato's <a style={{cursor:"pointer",color:"#f05a69"}}>Terms of Service, Privacy Policy</a>  and <a style={{cursor:"pointer",color:"#f05a69"}}>Content Policies</a></Typography>
 </div>
 <div style={{width:"100%",marginTop:"30px"}}>
 <Button style={{width: "calc(100% - 30px)", marginRight: "15px", marginLeft: "15px",color:"white", backgroundColor:isFilled?'#f05a69':'#cdcdcd',}} variant="contained" disabled={!isFilled}>
  Create Account
</Button>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",marginLeft:"15px",marginRight:"15px"}}> 
  <hr style={{borderColor:'#e9ebed',borderWidth:'1px',width:"40%"}} />
  <Typography variant="body1" style={{margin:"0 10px",color:"#a5a5a5"}}>or</Typography>
  <hr style={{borderColor:'#e9ebed',borderWidth:'1px',width:"40%"}} />
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
  <Typography>Already have an account? <a style={{cursor:"pointer",color:"#f05a69"}}>Log in</a></Typography>
 </div>

  </div>
}

export default SignUp