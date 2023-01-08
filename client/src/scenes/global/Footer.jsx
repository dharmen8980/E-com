import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            One - Piece
          </Typography>
          <div>
            We are excited to bring you a wide selection of high-quality
            photographs featuring all of your favorite characters from the
            beloved series. From Luffy and his Straw Hat crew, to the powerful
            pirate captains of the New World, we have it all. Whether you're a die-hard fan looking to add to your
            collection or a newcomer just discovering the world of One Piece, we
            have something for everyone.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Investors</Typography>
          <Typography mb="30px">Terms of Service</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            3502 Concordia St, Monroe, LA, 71203
          </Typography>
          <Typography mb="30px">Email: dharmen8980@gmail.com</Typography>
          <Typography mb="30px">(504)-401-6830</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
