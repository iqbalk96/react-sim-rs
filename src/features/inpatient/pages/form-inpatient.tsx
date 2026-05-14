import InpatientStepper from "../components/inpatient-stepper";

import InpatientFormStep from "../components/inpatient-form-step";

import InpatientPreviewStep from "../components/inpatient-preview-step";

import InpatientSuccessStep from "../components/inpatient-success-step";

import { useInpatientStore } from "../store/use-inpatient-store";

export default function InpatientForm() {
    const currentStep =
        useInpatientStore(
            (state) =>
                state.currentStep
        );

    return (
        <div className="mt-5 flex flex-col items-center">
            <InpatientStepper
                currentStep={currentStep}
            />

            <div className="w-full max-w-2xl">
                {currentStep === "form" && (
                    <InpatientFormStep />
                )}

                {currentStep ===
                    "preview" && (
                        <InpatientPreviewStep />
                    )}

                {currentStep ===
                    "success" && (
                        <InpatientSuccessStep />
                    )}
            </div>
        </div>
    );
}