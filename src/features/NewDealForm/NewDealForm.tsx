import React, { useState } from "react";
import noop from "lodash/noop";
import { DealType } from "../../types";
import "./NewDealForm.scss";

const DEFAULT_DEAL: DealType = {
  institution: "",
  dealType: "",
  dealSize: "",
  isPublished: false,
};

type DealFormProps = {
  onCreateDeal: (deal: DealType) => any;
};

type ValidationProps = {
  isDisplayed: string;
  input: string;
};

const InputValidation = (props: ValidationProps) => {
  // no experience with SASS so did some inline styling
  return (
    <span
      style={{
        fontSize: "x-small",
        color: "#cc0001",
        display: `${props.isDisplayed}`,
      }}
    >
      Invalid {props.input}
    </span>
  );
};

const DealForm = (props: DealFormProps) => {
  const { onCreateDeal = noop } = props;
  const [newDeal, setNewDeal] = useState(DEFAULT_DEAL);
  const [validInstitution, setValidInstitution] = useState<boolean>(true);
  const [validDealType, setValidDealType] = useState<boolean>(true);
  const [validDealSize, setValidDealSize] = useState<boolean>(true);

  const handleUpdateProperty = (property: string) => (
    e: React.ChangeEvent<any>
  ) => {
    if (property === "institution") {
      // checking for only empty/missing values
      setNewDeal({ ...newDeal, institution: e.target.value });
      if (e.target.value === "") {
        setValidInstitution(false);
      } else {
        setNewDeal({ ...newDeal, institution: e.target.value });
        setValidInstitution(true);
      }
    } else if (property === "dealType") {
      // checking for only empty/missing values
      setNewDeal({ ...newDeal, dealType: e.target.value });
      if (e.target.value === "") {
        setValidDealType(false);
      } else {
        setNewDeal({ ...newDeal, dealType: e.target.value });
        setValidDealType(true);
      }
    } else if (property === "dealSize") {
      // checking for valid numbers as well as empty/missing values
      setNewDeal({ ...newDeal, dealSize: e.target.value });
      try {
        if (isNaN(parseFloat(e.target.value))) {
          setValidDealSize(false);
        } else {
          setValidDealSize(true);
        }
      } catch {
        setValidDealSize(false);
      }
    }
  };

  const handleCreateDeal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newDeal.institution === "") {
      setValidInstitution(false);
    } else if (newDeal.dealType === "") {
      setValidDealType(false);
    } else if (newDeal.dealSize === "") {
      setValidDealSize(false);
    } else {
      if (validInstitution && validDealType && validDealSize) {
        onCreateDeal({ ...newDeal });
        setNewDeal({ ...DEFAULT_DEAL });
      }
    }
  };

  return (
    <form className="NewDealForm tile">
      <div className="tile--header">Add New Deal</div>
      <div className="NewDealForm--div">
        <label className="NewDealForm--label">Institution</label>
        <input
          className="NewDealForm--input"
          value={newDeal.institution}
          placeholder="LS Credit Union"
          onChange={handleUpdateProperty("institution")}
          required
        />
        {/* institution could ideally be a dropdown so that junk characters are not inserted */}
        <InputValidation
          isDisplayed={validInstitution ? "none" : "block"}
          input="institution"
        />
      </div>
      <div className="NewDealForm--div">
        <label className="NewDealForm--label">Deal Type</label>
        <input
          className="NewDealForm--input"
          value={newDeal.dealType}
          placeholder="Consumer Auto"
          onChange={handleUpdateProperty("dealType")}
          required
        />
        {/* deal type could ideally be a dropdown so that junk characters are not inserted */}
        <InputValidation
          isDisplayed={validDealType ? "none" : "block"}
          input="deal type"
        />
      </div>
      <div className="NewDealForm--div">
        <label className="NewDealForm--label">Deal Size</label>
        <input
          className="NewDealForm--input"
          value={newDeal.dealSize}
          placeholder="$1,000,000"
          onChange={handleUpdateProperty("dealSize")}
          required
        />
        <InputValidation
          isDisplayed={validDealSize ? "none" : "block"}
          input="deal size value"
        />
      </div>
      <button className="NewDealForm--button" onClick={handleCreateDeal}>
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
