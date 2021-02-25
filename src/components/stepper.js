import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const {
    activeStep,
    steps,
    // isStepSkipped,
    // isStepOptional,
    // isStepSkipped,
    handleBackStep,
    // handleReset,
    handleNext,
  } = props;

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps?.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = <Typography variant="caption">Optional</Typography>;
          //   }
          //   if (isStepSkipped(index)) {
          //     stepProps.completed = false;
          //   }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps?.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            {/* <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>  */}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBackStep}
                className={classes.button}
              >
                Back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
