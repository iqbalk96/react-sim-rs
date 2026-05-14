import { Button } from "@/shared/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { useInpatientStore } from "../store/use-inpatient-store";

export default function InpatientPreviewStep() {
  const {
    formData,
    addPatient,
    setCurrentStep,
    resetForm,
  } = useInpatientStore();

  const handleSubmit = () => {
    addPatient(formData);

    resetForm();

    setCurrentStep("success");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Preview Data Pasien
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <strong>Nama:</strong>{" "}
          {formData.name}
        </div>

        <div>
          <strong>NIK:</strong>{" "}
          {formData.nik}
        </div>

        <div>
          <strong>Diagnosa:</strong>{" "}
          {formData.diagnosis}
        </div>

        <div>
          <strong>Tanggal:</strong>{" "}
          {formData.admissionDate}
        </div>

        <div>
          <strong>Dokter:</strong>{" "}
          {formData.doctor}
        </div>

        <div>
          <strong>Ruangan:</strong>{" "}
          {formData.room}
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            onClick={() =>
              setCurrentStep("form")
            }
          >
            Back
          </Button>

          <Button
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}