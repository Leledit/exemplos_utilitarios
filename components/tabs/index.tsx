import { Box, styled, Tabs } from '@mui/material';
import styles from './index.module.scss';

export function a11yPropsBasicTabs(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const CustomizedTabs = styled(Tabs)({
    ".MuiTab-root": {
        color: "#868686",
        fontWeight: "700",
        paddingLeft: "0px"
    },
    background: "rgba(255,255,255,1)",
    paddingLeft: "30px",
    border: "1px solid rgba(134, 134, 134, 0.5)",
    borderBottom: "0px",
    borderStartEndRadius: "7px",
    borderStartStartRadius: "7px",
})

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function BasicTabs(props: Readonly<TabPanelProps>) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={styles.containerPage}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
