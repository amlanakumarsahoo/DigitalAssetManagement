import { transferAssets } from "./transfer.js";
import { generateCSVReport } from "../reporting/report.js";
import { generateHTMLReport } from "../reporting/htmlReport.js";
import { generatePDFReport } from "../reporting/pdfReport.js";


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
