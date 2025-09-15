"use client";

import jsPDF from "jspdf";
import type { QA } from "./convertToQnA";

/**
 * Generate PDF from Q&A
 */
export const generateAndSavePDF = async (qaData: QA[]): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Health Survey Form Data", 20, 20);

      let y = 30;
      for (const { question, answer } of qaData) {
        doc.setFontSize(12);
        doc.text(`Q: ${question}`, 20, y);
        y += 8;
        doc.text(`A: ${answer}`, 30, y);
        y += 12;

        if (y > 280) {
          doc.addPage();
          y = 20;
        }
      }

      resolve(doc.output("blob"));
    } catch (err) {
      reject(err);
    }
  });
};
