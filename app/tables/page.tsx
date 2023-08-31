import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Transactions" />

      <div className="flex flex-col gap-10">
        <TableOne title="Your spare changes" />
        <TableOne title="Your crypto purchases" />
      </div>
    </>
  );
};

export default TablesPage;
