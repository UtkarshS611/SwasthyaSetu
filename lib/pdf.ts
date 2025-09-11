import jsPDF from "jspdf";
import { HealthSurveyFormData } from "@/components/Form/Health-survey/HealthSurvey";

export const generateAndSavePDF = async (formData: HealthSurveyFormData) => {
  return new Promise<void>((resolve, reject) => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Health Survey Form Data", 20, 20);

      let y = 30;
      for (const [key, value] of Object.entries(formData)) {
        doc.setFontSize(12);
        doc.text(`${key}: ${value}`, 20, y);
        y += 10;
        if (y > 280) { // page break
          doc.addPage();
          y = 20;
        }
      }

      const pdfData = doc.output("datauristring");
      localStorage.setItem("healthSurveyPDF", pdfData); // Save to localStorage
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
