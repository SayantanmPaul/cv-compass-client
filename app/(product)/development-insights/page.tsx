"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ProductLegalDateWritten,
  ProductLegalHeader,
} from "@/components/app-ui/product-legal/header";
import { ProductLegalNavbar } from "@/components/app-ui/product-legal/navbar";
import Footer from "@/components/landing/footer";
import MarkDown from "@/components/ui/markdown";

const DevelopmentInsigntsPage = () => {
  return (
    <motion.div
      className="w-full min-h-screen lg:px-16 px-4 py-7 bg-no-repeat  max-w-screen-2xl flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-6 w-full items-center">
        <ProductLegalNavbar />
        <div className="w-full lg:max-w-[530px] flex lg:justify-center">
          <ProductLegalHeader header="Development Insights" />
        </div>
        <div className="max-w-screen-lg w-full flex flex-col justify-start items-center gap-2">
          <ProductLegalDateWritten dateString="8rd February 2025" />
          <MarkDown content={InsigntsMarkdown} />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default DevelopmentInsigntsPage;

const InsigntsMarkdown = `
This project aims to address the limitations of traditional ATS (Applicant Tracking System) scanners while providing a more user-friendly solution for job seekers and hiring teams. It compares the candidate's resume with the specific job requirements and background fit needs and provides a more accurate analysis of the candidate's strengths and relevancy with the job requirement.

### How it Works:

  CVCompass utilizes a pre-trained LLM fine-tuned on a dataset of resumes and job descriptions.  When provided with a resume and job description, the model performs the following steps:
  1. Text Processing: Cleans and processes the resume and job description text.
  2. Keyword Extraction: Identifies key terms and phrases in both documents.
  3. Matching and Scoring: Matches keywords, assesses experience and project relevance, and calculates the ATS score and related metrics.
  4. Feedback Generation: Creates specific feedback points for resume improvement.
  5. Store a copy of feedback for fine tuneing model purpose and send the information over to client. 

### Future Development:
  1. Improved Contextual Understanding:  Enhancements on model by fine tuneing with custom data to better capture the context of skills and  experience to generate optimal results.
  2. More Model Options: Expanding the available model options to include more open source LLMs( fine-tuning options).
  3. Recruiter View: Implement multiple resume evaluation at a time.


The Diagram below shows the workflow of how CVCompass works ->
![image](https://github.com/user-attachments/assets/97a3f69c-e6aa-469b-a16d-3080e0d5af1f)

Have any idea or recommandation? You can reach out to me at:  [iam.paulsayantan06@gmail.com](mailto:iam.paulsayantan06@gmail.com)

Star this project on Github :
  1. [https://github.com/SayantanmPaul/cv-compass-client](https://github.com/SayantanmPaul/cv-compass-client)
  2. [https://github.com/SayantanmPaul/cv-compass-server](https://github.com/SayantanmPaul/cv-compass-server)
`;
