import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { Input } from "@/shared/components/ui/input";

import { Button } from "@/shared/components/ui/button";
import { useInpatientTable } from "../hooks/use-inpatient-table";

export default function InpatientTable() {
  const {
    loading,
    search,
    setSearch,
    sortBy,
    setSortBy,
    page,
    setPage,
    totalPages,
    paginatedPatients,
  } = useInpatientTable();

  // TODO: Refactor to shared component
  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          Loading patients...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Daftar Pasien Aktif
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Cari nama / NIK"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <Button
            variant={
              sortBy === "name"
                ? "default"
                : "outline"
            }
            onClick={() =>
              setSortBy("name")
            }
          >
            Sort Name
          </Button>

          <Button
            variant={
              sortBy === "date"
                ? "default"
                : "outline"
            }
            onClick={() =>
              setSortBy("date")
            }
          >
            Sort Date
          </Button>
        </div>

        {paginatedPatients.length ===
          0 ? (
          <div className="py-8 text-center text-muted-foreground">
            Data pasien tidak ditemukan
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">
                  Nama
                </th>

                <th>NIK</th>

                <th>Diagnosa</th>

                <th>Tanggal</th>

                <th>Dokter</th>

                <th>Ruangan</th>
              </tr>
            </thead>

            <tbody>
              {paginatedPatients.map(
                (patient) => (
                  <tr
                    key={patient.nik}
                    className="border-b"
                  >
                    <td className="py-2">
                      {patient.name}
                    </td>

                    <td>
                      {patient.nik}
                    </td>

                    <td>
                      {
                        patient.diagnosis
                      }
                    </td>

                    <td>
                      {
                        patient.admissionDate
                      }
                    </td>

                    <td>
                      {patient.doctor}
                    </td>

                    <td>
                      {patient.room}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}

        <div className="flex items-center justify-end gap-2">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() =>
              setPage((prev) =>
                prev - 1
              )
            }
          >
            Prev
          </Button>

          <span>
            {page} / {totalPages || 1}
          </span>

          <Button
            variant="outline"
            disabled={
              page === totalPages ||
              totalPages === 0
            }
            onClick={() =>
              setPage((prev) =>
                prev + 1
              )
            }
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}