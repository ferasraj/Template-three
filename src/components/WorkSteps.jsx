import WorkStepsCards from "./WorkStepsCards";
import { WorkStepData } from "../assets/assets";
import { twMerge } from "tailwind-merge";

const WorkSteps = () => {
  return (
    <section id="WorkStep">
      <div className="WorkStep py-primary relative bg-bg">
        <h2 className="main-title uppercase">How It Works ?</h2>
        <div
          className={twMerge(
            "container flex md:flex-row flex-col items-center justify-between"
          )}
        >
          <img
            src="src/assets/imgs/work-steps.png"
            alt="WorkStep"
            className={twMerge(
              "max-w-full md:mr-[100px] mr-0 md:mb-0 mb-[50px]"
            )}
          />
          <div className={twMerge("infoWork")}>
            {WorkStepData.map((WorkStep) => (
              <WorkStepsCards key={WorkStep.id} WorkSteps={WorkStep} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
