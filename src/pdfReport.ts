import puppeteer from "puppeteer";
import path from "path";

export async function generatePDFReport() {
  const htmlPath = path.resolve("transfer-report.html");
  const pdfPath = path.resolve("transfer-report.pdf");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${htmlPath}`, {
    waitUntil: "networkidle0"
  });

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true
  });

  await browser.close();

  console.log("📄 PDF report generated:", pdfPath);
}
