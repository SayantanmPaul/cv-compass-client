"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ConfirmRedirect = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    setOpen(false);
    router.push("https://github.com/SayantanmPaul/cv-compass-client");
  };

  const navOptionsClass =
    "hover:underline hover:font-black hover:text-slate-50 underline-offset-2 ease-in-out duration-200 cursor-pointer";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className={`${navOptionsClass}`}>Github</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-5 bg-[#1B2529]/40 backdrop-blur-lg border-[#1B2529]">
        <DialogHeader>
          <DialogTitle className="font-secondary">Confirm Redirect</DialogTitle>
          <DialogDescription className="text-muted-foreground font-secondary">
            Are you sure you want to leave this page? You will be redirected to
            github.com
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            className=" py-1 px-6 font-secondary font-bold text-sm bg-[#1B2529]  relative text-white group text-center"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="tabs py-1 px-6 font-secondary font-bold text-sm bg-[#D7700B] hover:bg-[#ae671f]  relative text-white group text-center"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmRedirect;
