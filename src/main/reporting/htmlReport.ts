import fs from "fs";
import path from "path";
import type { TransferReport } from "../utils/type.js";

export async function generateHTMLReport(data: TransferReport[]) {
  const reportPath = path.resolve("reports/transfer-report.html");
  

  const rows = data.map(item => `
    <tr class="${item.status === "SUCCESS" ? "success" : "failed"}">
      <td>${item.filePath}</td>
      <td>${item.sizeKB}</td>
      <td>${item.transferredAt}</td>
      <td>${item.status}</td>
      <td>${item.error ?? ""}</td>
    </tr>
  `).join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Digital Asset Transfer Report</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f5f7fa;
    }
    h1 {
      color: #333;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      background: white;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      font-size: 14px;
    }
    th {
      background: #2c3e50;
      color: white;
    }
    tr.success {
      background-color: #eafaf1;
    }
    tr.failed {
      background-color: #fdecea;
    }
  </style>
</head>
<body>

  <h1>📁 Digital Asset Transfer Report</h1>
  <p><strong>Total Files:</strong> ${data.length}</p>
  <p><strong>Generated At:</strong> ${new Date().toISOString()}</p>

  <table>
    <thead>
      <tr>
        <th>File Path</th>
        <th>Size (KB)</th>
        <th>Transferred At</th>
        <th>Status</th>
        <th>Error</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>

</body>
</html>
`;

  fs.writeFileSync(reportPath, html, "utf-8");
  console.log("🌐 HTML report generated:", reportPath);
}
