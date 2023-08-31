import DonationsPortfolioTable from "@/components/Tables/DonationsPortfolioTable";

import DonationsTxsTable from "@/components/Tables/DonationsTxsTable";

const DonationsPage = () => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-black dark:text-white">
        Your donations
      </h3>

      <div className="mb-8 flex flex-col gap-10">
        <DonationsPortfolioTable title="Portfolio" />
      </div>

      <div className="flex flex-col gap-10">
        <DonationsTxsTable title="Transactions" />
      </div>
    </>
  );
};

export default DonationsPage;
