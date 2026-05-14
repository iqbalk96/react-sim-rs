import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useInpatientStore } from "../store/use-inpatient-store";

export function useInpatientTable() {
  const patients =
    useInpatientStore(
      (state) => state.patients
    );

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [sortBy, setSortBy] =
    useState<"name" | "date">("name");

  const [page, setPage] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, sortBy]);

  const filteredPatients =
    useMemo(() => {
      const filtered =
        patients.filter(
          (patient) =>
            patient.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            patient.nik.includes(
              search
            )
        );

      return filtered.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(
            b.name
          );
        }

        return (
          new Date(
            b.admissionDate
          ).getTime() -
          new Date(
            a.admissionDate
          ).getTime()
        );
      });
    }, [patients, search, sortBy]);

  const totalPages = Math.ceil(
    filteredPatients.length /
      pageSize
  );

  const paginatedPatients =
    filteredPatients.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

  return {
    loading,

    search,
    setSearch,

    sortBy,
    setSortBy,

    page,
    setPage,

    totalPages,

    paginatedPatients,
  };
}