import {Box , Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import ProgressCircle from "./progressCircle";

const StatBox = ({title, subtitle, icon, progress, increase})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{color: colors.grey[100]}}>
                        {title}
                    </Typography>
                    <Typography variant="h5" sx={{color: colors.greenAccent[500]}}>
                        {subtitle}
                    </Typography>
                </Box>
                
                <Box display="flex flex-column " justifyContent="space-between">
                <ProgressCircle progress={progress} />
                    <Typography variant="h5" fontStyle ="italic" sx={{color: colors.grey[100]}} class="mt-5">
                        {increase}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox;