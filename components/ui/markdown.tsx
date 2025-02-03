import React from "react";
import Markdown from "react-markdown";

const MarkDown = ({ content }: { content: string }) => {
  return (
    <Markdown
      components={{
        h1: ({ ...props }) => (
          <h2 className="w-full" style={{ color: "white" }} {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="w-full" style={{ color: "white" }} {...props} />
        ),
        h3: ({ ...props }) => (
          <h3 className="w-full" style={{ color: "white" }} {...props} />
        ),
        strong: ({ ...props }) => (
          <strong style={{ color: "white" }} {...props} />
        ),
        a: ({ ...props }) => <a style={{ color: "#d57009" }} {...props} />,
        em(props) {
          const { ...rest } = props;
          return <i style={{ color: "#d57009" }} {...rest} />;
        },
      }}
      className="min-w-full font-medium font-alegreya text-lg prose text-white"
    >
      {content}
    </Markdown>
  );
};

export default MarkDown;
