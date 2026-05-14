import { useState } from "react";

import { z } from "zod";

import { Button } from "@/shared/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import FormInput from "./form-input";

import { inpatientSchema } from "../schemas/inpatient.schema";

import { useInpatientStore } from "../store/use-inpatient-store";

export default function InpatientFormStep() {
  const {
    formData,
    setFormData,
    setCurrentStep,
  } = useInpatientStore();

  const [errors, setErrors] =
    useState<Record<string, string>>(
      {}
    );

  const handleNext = () => {
    try {
      inpatientSchema.parse(formData);

      setErrors({});

      setCurrentStep("preview");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<
          string,
          string
        > = {};

        error.issues.forEach((err) => {
          const fieldName =
            err.path[0] as string;

          fieldErrors[fieldName] =
            err.message;
        });

        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>
          Form Pasien Masuk
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <FormInput
          label="Nama Pasien"
          value={formData.name}
          error={errors.name}
          placeholder="Masukkan nama pasien"
          onChange={(value: string) =>
            setFormData({
              name: value,
            })
          }
        />

        <FormInput
          label="NIK"
          value={formData.nik}
          error={errors.nik}
          placeholder="Masukkan 16 digit NIK"
          onChange={(value: string) =>
            setFormData({
              nik: value,
            })
          }
        />

        <FormInput
          label="Diagnosa Masuk"
          value={formData.diagnosis}
          error={errors.diagnosis}
          placeholder="Masukkan diagnosa pasien"
          onChange={(value: string) =>
            setFormData({
              diagnosis: value,
            })
          }
        />

        <FormInput
          type="date"
          label="Tanggal Masuk"
          value={formData.admissionDate}
          error={
            errors.admissionDate
          }
          onChange={(value: string) =>
            setFormData({
              admissionDate: value,
            })
          }
        />

        <FormInput
          label="Dokter Penanggung Jawab"
          value={formData.doctor}
          error={errors.doctor}
          placeholder="Masukkan nama dokter"
          onChange={(value: string) =>
            setFormData({
              doctor: value,
            })
          }
        />

        <FormInput
          label="Ruangan"
          value={formData.room}
          error={errors.room}
          placeholder="Contoh: ICU-01"
          onChange={(value: string) =>
            setFormData({
              room: value,
            })
          }
        />

        <Button
          className="w-full"
          onClick={handleNext}
        >
          Continue to Preview
        </Button>
      </CardContent>
    </Card>
  );
}