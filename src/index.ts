import { transferAssets } from "./transfer.js";
import { generateCSVReport } from "./main/reporting/report.js";
import { generateHTMLReport } from "./main/reporting/htmlReport.js";
import { generatePDFReport } from "./main/reporting/pdfReport.js";


async function run() {
  const source = "./source-assets";
  const target = "./target-assets";

  const report = await transferAssets(source, target);
  await generateCSVReport(report);
  await generateHTMLReport(report);
   await generatePDFReport();

  console.log("✅ Asset transfer completed");
}

run().catch(console.error);
