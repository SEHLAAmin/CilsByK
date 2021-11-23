import { makeStyles } from '@material-ui/styles';
import React from 'react'


    const useStyles = makeStyles({
        leftside: {

        },
        rightside : {

        }
      });



function TemplateHeader(props) {


 const classes = useStyles();


    return (
        <div>
         <div className="blureddiv">
             <img src="" alt="" />
         </div>
         <div className={classes.leftside}></div>
         <div className={classes.rightside}></div>
        </div>
    )
}

export default TemplateHeader
