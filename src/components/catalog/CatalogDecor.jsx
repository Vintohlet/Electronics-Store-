import { Box,Container,Typography } from "@mui/material"
import catalogImage from "../../assets/img/header_catalog.jpg"
export default function CatalogDecor(){
    return(<>
        <Box>
        <img
          src={catalogImage}
          alt="samsung"
          className="catalog_image"
        />
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{display:{xs:"flex"}, justifyContent:{xs:"center"}, textAlign:{xs:"center"}}}>
          <Typography variant="h3" sx={{ fontWeight: "700" }}>
            Product Catalog
          </Typography>
          </Box>
        </Box>
      </Container>
      </>
    )
}
