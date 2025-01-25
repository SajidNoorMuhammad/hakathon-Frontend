import React from "react";

const MicrofinanceSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col mt-10 md:flex-row justify-between gap-6 px-4">
        <div className="md:w-1/2 space-y-0">
          <h2 className="text-1xl mb-[5%] font-normal text-gray-800">
            Services - Social Welfare - Microfinance
          </h2>
          <h3 className="text-3xl font-semibold text-teal-600">
            Microfinance (Apna Karoobar)
          </h3>
          <p className="text-gray-700 text-md leading-6">
            Saylani Welfare is providing easy installment loans to small
            business owners. At the same time, Saylani is helping people whose
            businesses were destroyed in Covid – 19 by the lockdown. All these
            items are provided on easy monthly installments without interest
            and without profit.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="/rightside.jpg"
            alt="Microfinance"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MicrofinanceSection;
