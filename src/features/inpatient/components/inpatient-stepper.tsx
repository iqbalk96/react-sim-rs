interface Props {
  currentStep:
    | "form"
    | "preview"
    | "success";
}

export default function InpatientStepper({
  currentStep,
}: Props) {
  const steps = [
    "form",
    "preview",
    "success",
  ];

  return (
    <div className="flex items-center gap-4 mb-6">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-2"
        >
          <div
            className={`
              h-8 w-8 rounded-full flex items-center justify-center text-sm
              ${
                currentStep === step
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }
            `}
          >
            {index + 1}
          </div>

          <span className="capitalize">
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}