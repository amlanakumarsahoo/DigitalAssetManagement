import { transferAssets } from "./transfer.js";
import { generateCSVReport } from "./report.js";
async function run() {
    const source = "./source-assets";
    const target = "./target-assets";
    const report = await transferAssets(source, target);
    await generateCSVReport(report);
    console.log("✅ Asset transfer completed");
}
run().catch(console.error);
//# sourceMappingURL=index.js.map