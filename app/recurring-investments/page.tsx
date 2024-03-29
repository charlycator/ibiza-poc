import CardDataStats from "@/components/CardDataStats";
import TableThree from "@/components/Tables/TableThree";
import { 
  spareData,
  spareHeaders,
  salariesData,
  salariesHeaders,
  recurringData,
  recurringHeaders,
 } from "@/fixtures";
const TablesPage = () => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-black dark:text-white">
        Your bank transactions
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5 mb-12">
        <CardDataStats
          title="bank movements"
          total="851">
          <h2 className="font-bold w-full h-11.5 items-center rounded-full" style={{ fontSize: '1.65rem' }}>
            $3456 total invested
          </h2>
        </CardDataStats>
        <CardDataStats
          actionButtonText="Update rule"
          title="spare changes"
          total="839">
          <h2 className="font-bold w-full h-11.5 items-center rounded-full" style={{ fontSize: '1.65rem' }}>
            $965 in round ups
          </h2>
        </CardDataStats>
        <CardDataStats
          actionButtonText="Update rule"
          title="tracked payrolls"
          total="8">
          <h2 className="font-bold w-full h-11.5 items-center rounded-full" style={{ fontSize: '1.65rem' }}>
            $2017 from payrolls
          </h2>
        </CardDataStats>
        <CardDataStats
          actionButtonText="Update rule"
          title="manual investments"
          total="4">
          <h2 className="font-bold w-full h-11.5 items-center rounded-full" style={{ fontSize: '1.65rem' }}>
            $600 in recurring inv. 
          </h2>
        </CardDataStats>
      </div>
      <div className="flex flex-col gap-10">
        <TableThree
          title="Spare changes"
          data={spareData}
          headers={spareHeaders}/>
        <TableThree
          title="Payrolls"
          data={salariesData}
          headers={salariesHeaders}/>
        <TableThree
          title="Manual recurring investments"
          data={recurringData}
          headers={recurringHeaders}/>
      </div>
    </>
  );
};

export default TablesPage;
