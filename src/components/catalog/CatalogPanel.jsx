import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
export default function CatalogPanel({ onCategorySelect }) {
  const categories = ["Smartphones", "Laptops", "PC", "Printers", "TV"];
  return (
    <Container maxWidth="lg">
    <Box sx={{ bgcolor: "white" }}>
      <Grid container justifyContent="space-between">
        {categories.map((category,index) => (
       <Grid item key={category} md={2}   xs={index === categories.length - 1 ? 12 : 6} sx={{display:"flex", justifyContent:"center"}} >
       <Button
         variant="text"
         size="medium"
         sx={{
           color: "black",
           fontWeight: 700,
           fontSize: "medium",
           textDecoration: "none",
         }}
         onClick={() => onCategorySelect(category)}
       >
         <Link className="link">{category}</Link>
       </Button>
     </Grid>
        ))}
        </Grid>

    </Box>
    </Container>
  );
}
