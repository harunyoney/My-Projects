import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Firms = () => {

  const { getDatas, deleteDatas } = useStockRequest();
  const { firms } = useSelector((state) => state.getData);
  console.log(firms);
  useEffect(() => {
    getDatas("firms");
  }, []);

  return (
    <>
    <h2>Firms</h2>
    <Button>New Firm</Button>
    <Container  sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap",
      gap:"20px"
    }} maxWidth="xl">
   {firms?.map((item)=> (
    <Card key={item._id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
        {item.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{
          deleteDatas("firms",item._id)
          getDatas("firms")
          }} variant="contained" size="small">delete</Button>
        <Button size="small">edit</Button>
      </CardActions>
    </Card>
   ))}
  
    
  

      </Container>
    </>
      
    
  );
};

export default Firms;
