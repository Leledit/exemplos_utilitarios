import { Button, useTheme } from "@mui/material";

interface IProps {
  title: string;
  action?: any;
  type?: any;
  customStyles?: {
    background?: string;
    color?: string;
    border?: string;
    height?: string;
    lineHeight?: string;
    width?: string;
    marginLeft?: string;
    fontSize?: string;
    fontWeight?: string;
    MS429Width?: string;
    MS429Height?: string;
  };
  icon?: any;
  className?:string,
}

export default function BasicButton({
  title,
  action,
  type,
  customStyles,
  icon,
  className
}: Readonly<IProps>) {
  const theme = useTheme();

  let settings = {
    border: `1px solid ${theme.customPalette.secondary.main}`,
    background: theme.customPalette.primary.main,
    color: theme.customPalette.secondary.main,
    lineHeight: "30px",
    height: "auto",
    fontSize: "14px",
    marginLeft: "10px",
    borderRadius: "10px",
    padding: "5px 18px 0px 18px",
    textTransform: "initial",
    fontWeight: "400",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.customPalette.primary.main,
      opacity: "0.7",
    },
    "@media (min-width:429px)": {
      marginLeft: "0px",
      width: "100%",
      height: "auto",
    },
  };

  if (customStyles) {
    settings = {
      ...settings,
      border: customStyles.border ?? settings.border,
      background: customStyles.background ?? settings.background,
      color: customStyles.color ?? settings.color,
      height: customStyles.height ?? settings.height,
      lineHeight: customStyles.lineHeight ?? settings.lineHeight,
      width: customStyles.width ?? settings.width,
      marginLeft: customStyles.marginLeft ?? settings.marginLeft,
      fontSize: customStyles.fontSize ?? settings.fontSize,
      fontWeight: customStyles.fontWeight ?? settings.fontWeight,
      "@media (min-width:429px)": {
        marginLeft: "0px",
        width: customStyles.MS429Width ?? "",
        height: customStyles.MS429Height ?? "",
      },
      "&:hover": {
        backgroundColor:customStyles.background ?? settings.background,
        opacity: "0.7",
      }
    };
  }

  if (icon) {
    return (
      <Button
        type={type ?? "button"}
        onClick={action}
        sx={settings}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className={className}
      >
        {icon}
        {title}
      </Button>
    );
  }

  return (
    <Button type={type ?? "button"} onClick={action} sx={settings}>
      {title}
    </Button>
  );
}
