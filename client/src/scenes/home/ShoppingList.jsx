import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("items", items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "Headphones"
  );
  const newArrivalsItem = items.filter(
    (item) => item.attributes.category === "Phones"
  );
  const bestSellersItem = items.filter(
    (item) => item.attributes.category === "Laptops"
  );
  return (
    <Box width="90%" margin="80px auto">
      <Typography variant="h3" align="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexwrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Phones" value="Phones" />
        <Tab label="Laptops" value="Laptops" />
        <Tab label="Headphones" value="Headphones" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Phones" &&
          newArrivalsItem.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Laptops" &&
          bestSellersItem.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Headphones" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
