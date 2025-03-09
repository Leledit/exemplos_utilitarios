import { Accordion, AccordionDetails, AccordionSummary, styled } from "@mui/material";

export const BasicEditorAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    height: "48px",
    minHeight: "48px !important",
    fontSize: "16px",
    fontWeight: 300,
    color:theme.customPalette.text.main,
    borderBottom:"1px solid #fff"
}));

export const BasicAccordionEditor = styled(Accordion)(({ theme }) => ({
    minHeight: "48px",
    background: theme.customPalette.primary.main,
    "&.Mui-expanded": {
        marginTop: "0px !important"
    },
}));

export const BasicAccordionEditorDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: '0px'
}));


export const BasicAccordion = styled(Accordion)(({ theme }) => ({
    marginBottom: "15px"
}));

export const BasicAccordionSummary = styled(AccordionSummary)(({ theme }) => ({

}))

export const BasicAccordionDetails = styled(AccordionDetails)(({ theme }) => ({

}));