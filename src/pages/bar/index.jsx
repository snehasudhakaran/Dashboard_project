import {Box} from "@mui/material";
import BarChart from "../../components/barChart";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

function Bar() {
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
        <Box height="75vh">
            <BarChart/>
        </Box>
    </Box>
  )
}

export default Bar