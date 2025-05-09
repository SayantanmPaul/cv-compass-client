import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/hooks/use-toast";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  value,
  onChange,
  error,
}: {
  value: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}) => {
  const [file, setFile] = useState<File | null>(value);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
    onChange(newFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    noClick: true,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: (acceptedFile) => {
      const file = acceptedFile[0];
      if (file && file.type === "application/pdf") {
        handleFileChange(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <div
      className={`w-full border border-white/10 border-dashed hover:border-white/20 ease-in-out ${
        error ? "border-primary hover:border-primary" : ""
      }`}
      {...getRootProps()}
    >
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="lg:p-10 p-5 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden "
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-alegreya font-semibold text-neutral-700 dark:text-neutral-300 lg:text-xl text-lg">
            Upload resume
          </p>
          <p className="relative z-20 font-brand font-normal text-neutral-400 dark:text-neutral-400 lg:text-sm text-xs mt-2 text-center">
            Drag or drop your resume here or click to upload (.pdf)
          </p>
          <div className="relative w-full mt-8 max-w-xl mx-auto min-h-28 h-full">
            {file ? (
              <motion.div
                layoutId="file-upload"
                className={cn(
                  "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 w-full mx-auto rounded-md",
                  "shadow-sm"
                )}
              >
                <div className="flex justify-between w-full items-center gap-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs font-alegreya"
                  >
                    {file.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input font-secondary"
                  >
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </motion.p>
                </div>

                <div className="flex text-xs items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400 ">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 font-secondary"
                  >
                    {file.type}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="font-brand text-xs"
                  >
                    modified {new Date(file.lastModified).toLocaleDateString()}
                  </motion.p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-24 mt-4 w-full max-w-[6rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center"
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                )}
              </motion.div>
            )}

            {!file && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-primary inset-0 z-30 bg-transparent flex items-center justify-center h-24 mt-4 w-full max-w-[6rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  return (
    <div className="relative flex justify-center items-center w-full h-full bg-gray-100 dark:bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: `radial-gradient(circle, gray 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
          backgroundPosition: `center`,
        }}
      />
    </div>
  );
}
