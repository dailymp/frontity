import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

export const checklists: Processor<React.HTMLProps<HTMLElement>> = {
  name: "checklists",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("check-marker-list"),
  processor: ({ node }) => {
    if (node.type === "element") {
      return {
        ...node,
        props: {
          ...node.props,
          css: css`
            ${node.props.css}
            list-style: none;

            li {
              position: relative;
              display: flex;

              &:before {
                content: url("https://frontity.org/wp-content/uploads/2020/02/check-circle-marker.svg");
              }
            }
          `,
        },
      };
    }

    return node;
  },
};
