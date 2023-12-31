import { FC, ReactElement } from "react";
import { Box, Card, Typography } from "@mui/material";
import Suggestion from "./Suggestion";
import RadioGroup from "@mui/material/RadioGroup";


const Suggestions: FC = (): ReactElement => {
    return(
        <Card sx={{height:200, color:'text.secondary'}}>
            <Box 
                display='flex' 
                justifyContent='space-between' 
                height='20%'
                py={1} 
            >
                <Typography 
                    variant="subtitle1" 
                    m={2}
                    sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}}}
                >
                    Suggested Project
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    color='lightblue' 
                    m={2}
                    sx={{
                        textDecoration:'underline', 
                        cursor: 'pointer', 
                        fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}
                    }}
                >
                    View Detail
                </Typography>
            </Box>
            <RadioGroup 
                defaultValue="Qualified"
                sx={{
                    height:'80%', 
                    my:2,
                    mx:'auto', 
                    py:'auto', 
                    px:4,
                }} 
            >
                <Suggestion label='Good' mailNo={100} color='secondary'/>
                <Suggestion label='Qualified' mailNo={1000} color='success'/>
                <Suggestion label='Not Qualified' mailNo={100} color='secondary'/>
            </RadioGroup>
        </Card>
    )
}

export default Suggestions;