import React, { useState, useEffect } from "react";
import "../styles/selectprimary.scss";
import BackClose from "../components/SelectPrimary/BackClose";
import BackNext from "../components/SelectPrimary/BackNext";
import Circles from "../components/SelectPrimary/Circles";
import Cuisins from "../components/SelectPrimary/Cuisins";
import ellipse18 from "../assests/ellipse18.png";
import ellipse17 from "../assests/ellipse17.png";
import { useHistory } from "react-router";
import SelectSecondary from "./SelectSecondary";
import HorizontalLinearStepper from "../components/stepper";
import SelectPrimary from "./SelectPrimary";
import Diet from "./DietaryRequirement";
import OrderFor from "./OrderFor";
import QuestionV36 from "./QuestionV36";
import Spicy from "./Spicy";
import QuestionV38 from "./QuestionV38";
import QuestionV26 from "./QuestionV26";
import DeliveryDay from "./DeliveryDay";
function SelectOrder() {
  const [primaryCuisines, setPrimaryCuisines] = useState({
    primaryCuisinesFirst: false,
    primaryCuisinesSecond: false,
    primaryCuisinesthird: false,
    primaryCuisinesFourth: false,
    alert: false,
  });

  const [option, setOption] = useState([]);
  const [primaryCuisinesType, setPrimaryCuisinesType] = useState();
  const router = useHistory();
  const handleStartPage = () => {
    if (JSON.parse(localStorage.getItem("primaryCuisine")).length == 0) {
      setPrimaryCuisines({ ...primaryCuisines, alert: true });
      // router.push('/diet')
    } else {
      router.push("/selectsecondary");
    }
  };
  const handleBackPage = () => {
    router.push("/meallanding");
  };
  const handleBack = () => {
    router.push("/");
  };

  const handleCuisines = (val) => {
    if (val == "North Indian") {
      setPrimaryCuisines({
        ...primaryCuisines,
        primaryCuisinesFirst: !primaryCuisines.primaryCuisinesFirst,
      });
      setPrimaryCuisinesType(val);
    } else if (val == "South Indian") {
      setPrimaryCuisines({
        ...primaryCuisines,
        primaryCuisinesSecond: !primaryCuisines.primaryCuisinesSecond,
      });
      setPrimaryCuisinesType(val);
    } else if (val == "Chinese") {
      setPrimaryCuisines({
        ...primaryCuisines,
        primaryCuisinesthird: !primaryCuisines.primaryCuisinesthird,
      });
      setPrimaryCuisinesType(val);
    } else {
      setPrimaryCuisines({
        ...primaryCuisines,
        primaryCuisinesFourth: !primaryCuisines.primaryCuisinesFourth,
      });
      setPrimaryCuisinesType(val);
    }
  };

  useEffect(() => {
    if (primaryCuisines.primaryCuisinesFirst === true) {
      let primaryCuisinesList = [...option];
      primaryCuisinesList.push(primaryCuisinesType);
      setOption(primaryCuisinesList);
    } else {
      let primaryCuisinesList = [...option];
      let value = "North Indian";
      primaryCuisinesList = primaryCuisinesList.filter(
        (item) => item !== value
      );
      setOption(primaryCuisinesList);
    }
  }, [primaryCuisines.primaryCuisinesFirst]);

  useEffect(() => {
    if (primaryCuisines.primaryCuisinesSecond === true) {
      let primaryCuisinesList = [...option];
      primaryCuisinesList.push(primaryCuisinesType);
      setOption(primaryCuisinesList);
    } else {
      let primaryCuisinesList = [...option];
      let value = "South Indian";
      primaryCuisinesList = primaryCuisinesList.filter(
        (item) => item !== value
      );
      setOption(primaryCuisinesList);
    }
  }, [primaryCuisines.primaryCuisinesSecond]);

  useEffect(() => {
    if (primaryCuisines.primaryCuisinesthird === true) {
      let primaryCuisinesList = [...option];
      primaryCuisinesList.push(primaryCuisinesType);
      setOption(primaryCuisinesList);
    } else {
      let primaryCuisinesList = [...option];
      let value = "Chinese";
      primaryCuisinesList = primaryCuisinesList.filter(
        (item) => item !== value
      );
      setOption(primaryCuisinesList);
    }
  }, [primaryCuisines.primaryCuisinesthird]);

  useEffect(() => {
    if (primaryCuisines.primaryCuisinesFourth === true) {
      let primaryCuisinesList = [...option];
      primaryCuisinesList.push(primaryCuisinesType);
      setOption(primaryCuisinesList);
    } else {
      let primaryCuisinesList = [...option];
      let value = "Italian";
      primaryCuisinesList = primaryCuisinesList.filter(
        (item) => item !== value
      );
      setOption(primaryCuisinesList);
    }
  }, [primaryCuisines.primaryCuisinesFourth]);

  useEffect(() => {
    localStorage.setItem("primaryCuisine", JSON.stringify(option));
  }, [option]);
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SelectPrimary />;

      case 1:
        return <SelectSecondary />;
      case 2:
        return <Diet />;
      case 3:
        return <Spicy />;
      case 4:
        return <QuestionV36 />;
      case 5:
        return <OrderFor />;
      case 6:
        return <QuestionV38 />;
      case 7:
        return <QuestionV26 />;
      case 8:
        return <DeliveryDay />;

      default:
        return "Unknown step";
    }
  };

  function getSteps() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="container-sp orderContainer">
      <div>
      {/* <BackClose handleBack={handleBack} /> */}
        {getStepContent(activeStep)}
      </div>
      <HorizontalLinearStepper
        handleBackStep={handleBackStep}
        handleNext={handleNext}
        activeStep={activeStep}
        steps={steps}
      />
    </div>
  );
}
export default SelectOrder;
