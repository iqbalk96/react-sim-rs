import { create } from "zustand";

import type { InpatientFormData } from "../types/inpatient.type";

import { inpatientMockData } from "../mocks/inpatient.mock";

type Step = "form" | "preview" | "success";

interface InpatientState {
  formData: InpatientFormData;

  patients: InpatientFormData[];

  currentStep: Step;

  setCurrentStep: (step: Step) => void;

  setFormData: (data: Partial<InpatientFormData>) => void;

  setPatients: (patients: InpatientFormData[]) => void;

  addPatient: (patient: InpatientFormData) => void;

  resetForm: () => void;
}

const initialState: InpatientFormData = {
  name: "",
  nik: "",
  diagnosis: "",
  admissionDate: "",
  doctor: "",
  room: "",
};

export const useInpatientStore = create<InpatientState>((set) => ({
  formData: initialState,

  patients: inpatientMockData,

  currentStep: "form",

  setCurrentStep: (step) =>
    set({
      currentStep: step,
    }),

  setFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),

  setPatients: (patients) =>
    set({
      patients,
    }),

  addPatient: (patient) =>
    set((state) => ({
      patients: [patient, ...state.patients],
    })),

  resetForm: () =>
    set({
      formData: initialState,
    }),
}));
