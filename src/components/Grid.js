import React from "react";
import styled from "styled-components";

export function Row(props) {
  const RowGrid = styled.div`
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  `;
  return <RowGrid>{props.children}</RowGrid>;
}

function getWidthString(span) {
  if (!span) return;
  
  let width = (span / 12) * 100;
  return `width: ${width}%`;
}

export function Column({xs, sm, md, lg, children}) {
  const ColumnGrid = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
      ${({ sm }) => sm && getWidthString(sm)}
    }

    @media only screen and (min-width: 992px) {
      ${({ md }) => md && getWidthString(md)}
    }

    @media only screen and (min-width: 1200px) {
      ${({ lg }) => lg && getWidthString(lg)}
    }
  `;

  return <ColumnGrid xs={xs} sm={sm} md={md} lg={lg}>{children}</ColumnGrid>;
}
