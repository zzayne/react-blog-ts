import { createStyles } from '@material-ui/core';

const headerStyle = createStyles({
    navLink:{
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: 400,
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(200, 200, 200, 0.2)"
        },
    }
});

export default headerStyle
  