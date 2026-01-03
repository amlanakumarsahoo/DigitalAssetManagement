import fs from "fs-extra";
import path from "path";
import type { TransferReport } from "./type.js";

export async function transferAssets(
  sourceDir: string,
  targetDir: string,
  report: TransferReport[] = []
): Promise<TransferReport[]> {

  const items = await fs.readdir(sourceDir);

  for (const item of items) {
    const srcPath = path.join(sourceDir, item);
    const destPath = path.join(targetDir, item);

    try {
      const stats = await fs.stat(srcPath);

      if (stats.isDirectory()) {
        await fs.ensureDir(destPath);
        await transferAssets(srcPath, destPath, report);
      } else {
        await fs.copy(srcPath, destPath);

        report.push({
          filePath: srcPath,
          sizeKB: Number((stats.size / 1024).toFixed(2)),
          transferredAt: new Date().toISOString(),
          status: "SUCCESS"
        });
      }
    } catch (error: any) {
      report.push({
        filePath: srcPath,
        sizeKB: 0,
        transferredAt: new Date().toISOString(),
        status: "FAILED",
        error: error.message
      });
    }
  }

  return report;
}
