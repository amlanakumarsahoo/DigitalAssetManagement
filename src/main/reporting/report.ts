import { createObjectCsvWriter } from "csv-writer";
//import { TransferReport } from "./types";
import type { TransferReport } from "../../type.js";

export async function generateCSVReport(data: TransferReport[]) {
  const csvWriter = createObjectCsvWriter({
    path: "reports/transfer-report.csv",
    header: [
      { id: "filePath", title: "File Path" },
      { id: "sizeKB", title: "Size (KB)" },
      { id: "transferredAt", title: "Transferred At" },
      { id: "status", title: "Status" },
      { id: "error", title: "Error" }
    ]
  });

  await csvWriter.writeRecords(data);
  console.log("✅ Report generated: transfer-report.csv");
}
