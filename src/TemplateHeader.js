import zIndex from "@material-ui/core/styles/zIndex";
import { makeStyles, styled } from "@material-ui/styles";
import { border, width } from "@material-ui/system";
import { height, positions } from "@mui/system";
import React from "react";

const useStyles = makeStyles({
  containerEnBas: {
    display: "flex",
    flexDirection: "row",
    marginTop : '-15vh' , 
    zIndex : '0',
    position: 'sticky'
  },
  titlepagedirection : {
      fontSize:"2rem",

position : 'absolute',
zIndex : '0', 
left : '67vh',
top : '40vh'
  }
});

const BlurComponent = styled("div" , "img")({
    backgroundColor: "black",
    height: "100vh",
    width: "100%",
    opacity: ".5",
})
const LeftComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "white",
  width: "50%",
  height: "70vh",
  borderTopRightRadius : '25px'
});

const RightComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "white",
  width: "50%",
  height: "70vh",
  borderTopLeftRadius : '25px'
});

function TemplateHeader(props , className) {
  const classes = useStyles();

  return (
    <div className={className}>
        <BlurComponent />
        <h1 className={classes.titlepagedirection}>{'Home > ' + props.direction}</h1>
      <div className={classes.containerEnBas}>
        <LeftComponent />
        <RightComponent />
      </div>

      <div className={classes.rightside}></div>
    </div>
  );
}

export default TemplateHeader;
