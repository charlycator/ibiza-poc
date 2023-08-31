import CardDataStats from "@/components/CardDataStats";
import TableOne from "@/components/Tables/TableOne";
import CryptoPortfolioTable from "@/components/Tables/CryptoPortfolioTable";
import CyrptoTxsTable from "@/components/Tables/CryptoTxsTable";

const TablesPage = () => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-black dark:text-white">
        Your crypto portfolio
      </h3>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Invested"
          total="$3456" />

        <CardDataStats
          title="Current value"
          total="$4906" />

        <CardDataStats
          successText
          title="Revenue"
          total="+$1450" />

        <CardDataStats
          successText
          title="Profit"
          total="+42%" />
      </div>

      <div className="mb-8 flex flex-col gap-10">
        <CryptoPortfolioTable title="Portfolio" />
      </div>

      <div className="flex flex-col gap-10">
        <CyrptoTxsTable title="Transactions" />
      </div>
    </>
  );
};

export default TablesPage;
