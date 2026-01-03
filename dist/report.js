import { createObjectCsvWriter } from "csv-writer";
export async function generateCSVReport(data) {
    const csvWriter = createObjectCsvWriter({
        path: "transfer-report.csv",
        header: [
            { id: "filePath", title: "File Path" },
            { id: "sizeKB", title: "Size (KB)" },
            { id: "transferredAt", title: "Transferred At" },
            { id: "status", title: "Status" },
            { id: "error", title: "Error" }
        ]
    });
    await csvWriter.writeRecords(data);
}
//# sourceMappingURL=report.js.map