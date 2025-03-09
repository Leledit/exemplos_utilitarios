import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    title: string,
}

const CustomTooltip = styled(({ className, ...props }: any) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.customPalette.secondary.main,
        color: theme.customPalette.text.dark,
        fontSize: 12,
        padding: '10px 10px',
        border: `1px solid ${theme.customPalette.border.main}`,
        fontWeight: '500',
    },
}));

export default function BasicTooltip({ children, title }: Readonly<IProps>) {

    return (
        <CustomTooltip title={title}>
            {children}
        </CustomTooltip>
    )
}