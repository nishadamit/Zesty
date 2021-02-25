import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
// import { relativeTimeRounding } from "moment";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}  />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    position : "relative",
    left : "240px !important",
    "& > * + *": {
        marginTop: theme.spacing(2),
    },
    rootSuccess : {
        right : "10% !important", 
    },
    rootDanger: {
     left : "10% !important"
    }
  }
}));

export default function SnackbarAleart({warningShow , warnigMessage, handleClose }) {
//   const [open, setOpen] = React.useState(false);

  const classes = useStyles();



//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

  return (
    <div >
      <Snackbar className={classes.root} open={warningShow} autoHideDuration={100}  onClick={handleClose}  > 
        <Alert  severity="error"  onClick={handleClose}  >
         {warnigMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
