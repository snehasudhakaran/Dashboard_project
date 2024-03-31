import { Box } from "@mui/material";
import  Header from "../../components/header";
import GeographyChart from "../../components/geographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

function Geography() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="Geography Chart" subtitle ="Simple Geography Chart" />
        <Box height="75vh" border={`1px solid solid ${colors.grey[100]}`} borderRadius="4px">
            <GeographyChart/>
        </Box>
    </Box>
  )
}

export default Geography