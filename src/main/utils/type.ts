export interface TransferReport {
  filePath: string;
  sizeKB: number;
  transferredAt: string;
  status: "SUCCESS" | "FAILED";
  error?: string;
}
