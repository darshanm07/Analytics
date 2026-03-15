import type { AdmissionsData } from "../types";

export const fetchAdmissions = async (): Promise<AdmissionsData> => {
  const res = await fetch(
    "https://mocki.io/v1/ceff4e01-67e7-49b7-b77b-360f65e08a49",
  );
  if (!res.ok) throw new Error("Failed to fetch admissions data");
  const data = await res.json();
  return data;
};
