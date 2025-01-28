import { useAppStore } from "@/context/AppStore";
import { useCallback, useEffect } from "react";
import DynamicTooltip from "../app-ui/dynamic-tooltip";
import { Card } from "../ui/card";

const LastResultsTable = () => {
  const { listResults, setListResults, addLastGeneratedFeedback } =
    useAppStore();

  // update the urls in case of page reload
  const resetResumeUrl = useCallback(() => {
    const updated = listResults.map((item) => ({
      ...item,
      resumeUrl: null,
    }));
    setListResults(updated);
  }, [listResults, setListResults]);

  // reload warning and execute resetResumeUrl to nil
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      resetResumeUrl();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [resetResumeUrl]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-start w-full font-alegreya font-semibold lg:px-2">
        {" "}
        Last Reviewed Resumes{" "}
        <DynamicTooltip content="resume links will expire if any session reset" />
      </h1>
      <Card className="overflow-hidden">
        <div className="flex flex-col overflow-x-scroll lg:overflow-x-hidden md:overflow-x-hidden lg:overflow-y-hidden ">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-muted">
                <thead className="text-primary font-alegreya text-base">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-left font-semibold "
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-left font-semibold  "
                    >
                      Resume List
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-center font-semibold  "
                    >
                      ATS Score
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-center font-semibold  "
                    >
                      Breakdown
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-center font-semibold  "
                    >
                      View Resume
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted text-accent font-secondary text-sm">
                  {listResults.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 pl-6 pr-3">{index + 1}</td>
                      <td className="py-4 pl-6 pr-3 text-sm ">
                        {item.resumeFileName || "No File Name"}
                      </td>
                      <td className="py-4 pl-6 pr-3 text-center ">
                        {item.atsScore}%
                      </td>
                      <td className="py-4 pl-6 pr-3 text-center hover:font-bold duration-150 ease-in-out ">
                        <a
                          href="#generated-feedback"
                          onClick={() => {
                            addLastGeneratedFeedback(item);
                          }}
                        >
                          view details
                        </a>
                      </td>
                      <td className=" pl-6 pr-3 text-blue-500 hover:underline text-center">
                        {item.resumeUrl ? (
                          <a
                            href={item.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          "N/A"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LastResultsTable;
