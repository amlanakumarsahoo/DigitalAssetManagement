Digital_Asset_Transfer/
│
├─ src/
│   ├─ index.ts
│   ├─ transfer.ts
│   └─ report.ts
│
├─ source-assets/   👈 REQUIRED
│   ├─ images/
│   ├─ docs/
│   └─ sample.pdf
│
├─ target-assets/   👈 auto-created / used
└─ package.json

Output Files 
Digital_Asset_Transfer/
│
├─ transfer-report.csv
├─ transfer-report.html
├─ transfer-report.pdf   ✅
│
├─ source-assets/
├─ target-assets/
└─ src/



<!-- 
INSTALATION STESPS

mkdir asset-transfer
cd asset-transfer
npm init -y
npm install fs-extra csv-writer
npm install -D typescript @types/node
npx tsc --init


npm install --save-dev @types/fs-extra
npm install -D ts-node typescript @types/node 
npm install puppeteer  

-->



<!-- to run script  : npm run dev       -->