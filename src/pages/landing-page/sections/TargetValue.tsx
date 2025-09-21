import React from "react";

import triplePFP from "../../../assets/images/triplePFP.png";
import accountingIcon from "../../../assets/icons/accountingIcon.png";

interface CardProps {
  img?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col text-center items-center bg-brand-gray max-w-[38rem] p-[2rem] rounded-3xl">
      <img className="mb-2 aspect-square max-h-11" src={accountingIcon} alt="" />
      <h5 className="text-2xl font-semibold mb-3">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

const TargetValue: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-[7rem]">
      <img className="max-w-[25rem]" src={triplePFP} alt="" />
      <h5 className="subheading font-semibold tracking-wide">
        Built for The Landlord
      </h5>
      <p className="body-text text-center max-w-[50rem] mb-[2.5rem]">
        Propertease supports investors and landlords at every stage and in every
        market.
      </p>

      {/* Centered Card Container */}
      <div className="flex flex-wrap gap-8 w-full max-w-[80rem] justify-center items-center mx-auto">
        {/* Cards with info on business "departments" */}
        <Card
          title={"Accounting"}
          description={
            "Payment systems allow for ease when making, or receiving payments. Expense tracking is simplified, to keep tracking payments in one location, and organized. Never spend the day looking for forgotten receipts and invoices again. All data stored, and accessible with downloadable reports."
          }
        />
        <Card
          title={"Accounting"}
          description={
            "Payment systems allow for ease when making, or receiving payments. Expense tracking is simplified, to keep tracking payments in one location, and organized. Never spend the day looking for forgotten receipts and invoices again. All data stored, and accessible with downloadable reports."
          }
        />
        <Card
          title={"Accounting"}
          description={
            "Payment systems allow for ease when making, or receiving payments. Expense tracking is simplified, to keep tracking payments in one location, and organized. Never spend the day looking for forgotten receipts and invoices again. All data stored, and accessible with downloadable reports."
          }
        />
        <Card
          title={"Accounting"}
          description={
            "Payment systems allow for ease when making, or receiving payments. Expense tracking is simplified, to keep tracking payments in one location, and organized. Never spend the day looking for forgotten receipts and invoices again. All data stored, and accessible with downloadable reports."
          }
        />
      </div>
    </div>
  );
};

export default TargetValue;
