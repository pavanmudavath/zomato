import { Button, Card, Typography } from "@mui/material"
import AppBar from "./AppBar"
const DiningOut = () => {
  return (
    <div>
        <AppBar/>
        <Card style={{width:"100%",height:"470px",backgroundColor:"#f8f8f8"}}>
            <div style={{marginLeft:"260px",marginTop:"15px"}}>
            <Typography variant="h4">Collections</Typography>
            <div style={{display:"flex",marginTop:"20px"}}>
            <Typography style={{fontSize:"16px",color:"#a4a4a4"}}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</Typography>
            <Typography style={{color:"#ff7e8b",cursor:"pointer",marginLeft:"80px"}}>All collections in Hyderabad {String.fromCharCode(11166)}</Typography>
            </div>
            <div style={{display:"flex"}}>
            <div style={{marginTop:"10px",marginRight:"20px"}}>
                <Card style={{width:"280px",height:"335px",borderRadius:"15px",position:"relative"}}>
                    <img src="../src/images/newcardImage.jpg" alt="image" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}}/>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"25px",left:"10px"}}>Newly Opened Restaurants...</Typography>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"5px",left:"10px"}}>20 Places {String.fromCharCode(11166)}</Typography>
                </Card>
            </div>
            <div style={{marginTop:"10px",marginRight:"20px"}}>
                <Card style={{width:"280px",height:"335px",borderRadius:"15px",position:"relative"}}>
                    <img src="../src/images/newcardImage.jpg" alt="image" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}}/>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"25px",left:"10px"}}>Newly Opened Restaurants...</Typography>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"5px",left:"10px"}}>20 Places {String.fromCharCode(11166)}</Typography>
                </Card>
            </div>
            <div style={{marginTop:"10px",marginRight:"20px"}}>
                <Card style={{width:"280px",height:"335px",borderRadius:"15px",position:"relative"}}>
                    <img src="../src/images/newcardImage.jpg" alt="image" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}}/>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"25px",left:"10px"}}>Newly Opened Restaurants...</Typography>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"5px",left:"10px"}}>20 Places {String.fromCharCode(11166)}</Typography>
                </Card>
            </div>
            <div style={{marginTop:"10px",marginRight:"20px"}}>
                <Card style={{width:"280px",height:"335px",borderRadius:"15px",position:"relative"}}>
                    <img src="../src/images/newcardImage.jpg" alt="image" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}}/>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"25px",left:"10px"}}>Newly Opened Restaurants...</Typography>
                    <Typography variant="h6" style={{color:"white",position:"absolute",bottom:"5px",left:"10px"}}>20 Places {String.fromCharCode(11166)}</Typography>
                </Card>
            </div>
          
            </div>
            </div>
        </Card>
       <Card style={{width:"100%",height:"85px",backgroundColor:"pink"}}>
       </Card>
    </div>
  )
}

export default DiningOut