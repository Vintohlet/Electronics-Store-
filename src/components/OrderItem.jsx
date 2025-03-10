import { Typography, Box, Card} from "@mui/material";

export default function OrderItem({ orderItems = [], total, createdAt }) {
  return (
    <Card sx={{"&:hover": {
          elevation: 6,
        }, mt:6}}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection:{xs:"column", md:"row"},
        justifyContent: {md:"space-between", xs:"center"},
        py: 6,
        px: 4,
      }}
    >
      <ul className="order__items">
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <li key={index} className="order__item">
              {item.title} <span className="order__quantity">x{item.quantity}</span>
            </li>
          ))
        ) : (
          <li className="order__item">Нет товаров</li>
        )}
      </ul>
      <Typography sx={{ fontWeight: "600", fontSize: "24px", mt:{xs:2, md:0}, justifyContent:"center"}}>{total}₸</Typography>
      <Typography sx={{ fontWeight: "600", fontSize: "18px",  mt:{xs:2, md:0} ,justifyContent:"center"}}>{createdAt}🕒</Typography>
    </Box>
    </Card>
  );
}
