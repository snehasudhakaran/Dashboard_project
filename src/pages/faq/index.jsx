import {Accordion, Box, Typography, useTheme } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from '../../theme';
import Header from "../../components/header";

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ"
            subtitle = "Frequentlt Asked Question Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 5
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam aspernatur? Libero, harum ea voluptate expedita omnis similique sapiente distinctio nam blanditiis nihil quam, ipsum doloribus non deserunt quaerat numquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    ) 
}

export default FAQ;