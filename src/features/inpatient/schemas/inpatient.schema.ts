import { z } from "zod";

export const inpatientSchema = z.object({
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter"),

  nik: z
    .string()
    .length(16, "NIK harus 16 digit")
    .regex(/^\d+$/, "NIK hanya angka"),

  diagnosis: z
    .string()
    .min(5, "Diagnosa wajib diisi"),

  admissionDate: z.string().min(1, "Tanggal masuk wajib diisi"),

  doctor: z
    .string()
    .min(3, "Dokter wajib diisi"),

  room: z
    .string()
    .min(1, "Ruangan wajib diisi"),
});

export type InpatientFormValues =
  z.infer<typeof inpatientSchema>;