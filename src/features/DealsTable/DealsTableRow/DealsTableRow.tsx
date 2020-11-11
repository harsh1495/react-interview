import { findLastIndex } from "lodash";
import React from "react";
import { DealType } from "../../../types";

import "./DealsTableRow.scss";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

type DealsTableRowProps = {
  deal: DealType;
  onRemoveClick: (d: DealType) => void;
  onPublishClick: (d: DealType) => void;
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const {
    deal: { institution, dealType, dealSize, isPublished },
  } = props;
  return (
    <tr className="DealsTableRow">
      <td className="DealsTableRow--cell">{institution}</td>
      <td className="DealsTableRow--cell">{dealType}</td>
      <td className="DealsTableRow--cell">
        {currencyAmountToString(dealSize)}
      </td>
      <td className="DealsTableRow--cell">{isPublished ? "Yes" : "No"}</td>
      <td className="DealsTableRow--cell">
        {isPublished ? (
          <button
            className="DealsTableRow--button"
            onClick={() => {
              props.onRemoveClick && props.onRemoveClick(props.deal);
            }}
          >
            Remove
          </button>
        ) : (
          <div className="dealActions">
            <button
              className="publishBtn"
              onClick={() => {
                props.onPublishClick && props.onPublishClick(props.deal);
              }}
            >
              Publish
            </button>
            <button
              className="DealsTableRow--button"
              onClick={() => {
                props.onRemoveClick && props.onRemoveClick(props.deal);
              }}
            >
              Remove
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default DealsTableRow;
