"use client";

import React, { useEffect, useState } from "react";
import { getStatus } from "@openstatus/react";

export type Status =
  | "operational"
  | "degraded_performance"
  | "partial_outage"
  | "major_outage"
  | "under_maintenance"
  | "unknown"
  | "incident";

const OpenStatusStat = () => {
  const [serverStatus, setServerStatus] = useState<Status>("unknown");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await getStatus("cvcompass-health");
        setServerStatus(res.status);
      } catch (error) {
        console.error("Error fetching status:", error);
        setServerStatus("unknown");
      }
    };
    fetchStatus();
  }, []);

  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block w-fit ">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background py-0.5 px-4 ring-1 ring-white/10 ">
        <span className="font-brand">server {serverStatus}</span>
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${
              serverStatus === "operational" ? "bg-green-400" : "bg-red-400"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              serverStatus === "operational" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default OpenStatusStat;
