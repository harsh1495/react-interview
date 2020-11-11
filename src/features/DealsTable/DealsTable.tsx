import React, { useState, useEffect } from "react";
import { DealsListType, DealType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";
import SortIcon from "../../assets/SortIcon";

type DealsTableProps = DealsListType;

function compareValues(key: string, order: string) {
  return function innerSort(dealA: DealType, dealB: DealType) {
    const a = dealA[key as keyof DealType];
    const b = dealB[key as keyof DealType];

    if (a === undefined || b == undefined) {
      return 0;
    }

    let comparison = 0;
    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    return order === "up" ? comparison * -1 : comparison;
  };
}

const DealsTable = (props: DealsTableProps) => {
  const { deals } = props;

  const [newDeals, setNewDeals] = useState<Array<DealType>>(deals);

  console.log(deals);
  console.log(newDeals);

  const remove = (deal: DealType) => {
    setNewDeals(newDeals.filter((d) => d.id != deal.id));
  };

  const publish = (deal: DealType) => {
    setNewDeals(
      [...newDeals].map((d) => {
        if (d.id === deal.id) {
          return {
            ...d,
            isPublished: true,
          };
        } else {
          return d;
        }
      })
    );
  };

  const dealsTableRows = newDeals.map((deal) => (
    <DealsTableRow
      key={deal.id}
      deal={deal}
      onRemoveClick={remove}
      onPublishClick={publish}
    />
  ));
  const [institutionSort, setInstitutionSort] = useState<
    "up" | "down" | undefined
  >();
  const [dealTypesort, setDealTypeSort] = useState<"up" | "down" | undefined>();
  const [dealSizesort, setDealSizeSort] = useState<"up" | "down" | undefined>();
  const [isPublishedsort, setIsPublishedSort] = useState<
    "up" | "down" | undefined
  >();

  const onSort = (key: string, state: any) => {
    if (state === undefined) {
      newDeals.sort(compareValues(key, "up"));
    } else if (state === "up") {
      newDeals.sort(compareValues(key, "down"));
    } else {
      newDeals.sort(compareValues(key, ""));
    }
  };

  const sortDirection = (state: any) => {
    if (state === undefined) {
      return "up";
    } else if (state === "up") {
      return "down";
    } else {
      return undefined;
    }
  };

  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <table className="DealsTable">
        <thead>
          <tr>
            <th className="DealsTable--headerCell">
              <div className="DealsTable--div">
                <span>Institution</span>
                <button
                  className="sortBtn"
                  onClick={() => {
                    setInstitutionSort(sortDirection(institutionSort));
                    setDealSizeSort(undefined);
                    setDealTypeSort(undefined);
                    setIsPublishedSort(undefined);
                    onSort("institution", institutionSort);
                  }}
                >
                  <SortIcon direction={institutionSort} />
                </button>
              </div>
            </th>
            <th className="DealsTable--headerCell">
              <div className="DealsTable--div">
                <span>Deal Type</span>
                <button
                  className="sortBtn"
                  onClick={() => {
                    setDealTypeSort(sortDirection(dealTypesort));
                    setInstitutionSort(undefined);
                    setDealSizeSort(undefined);
                    setIsPublishedSort(undefined);
                    onSort("dealType", dealTypesort);
                  }}
                >
                  <SortIcon direction={dealTypesort} />
                </button>
              </div>
            </th>
            <th className="DealsTable--headerCell">
              <div className="DealsTable--div">
                <span>Deal Size</span>
                <button
                  className="sortBtn"
                  onClick={() => {
                    setDealSizeSort(sortDirection(dealSizesort));
                    setInstitutionSort(undefined);
                    setDealTypeSort(undefined);
                    setIsPublishedSort(undefined);
                    onSort("dealSize", dealSizesort);
                  }}
                >
                  <SortIcon direction={dealSizesort} />
                </button>
              </div>
            </th>
            <th className="DealsTable--headerCell">
              <div className="DealsTable--div">
                <span>Is Published?</span>
                <button
                  className="sortBtn"
                  onClick={(e) => {
                    setIsPublishedSort(sortDirection(isPublishedsort));
                    setInstitutionSort(undefined);
                    setDealTypeSort(undefined);
                    setDealSizeSort(undefined);
                    onSort("isPublished", isPublishedsort);
                  }}
                >
                  <SortIcon direction={isPublishedsort} />
                </button>
              </div>
            </th>
            <th className="DealsTable--headerCell"></th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
