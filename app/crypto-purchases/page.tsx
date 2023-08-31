import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Crypto purchases" />

      <div className="flex flex-col gap-10">
        <TableOne title="Your crypto purchases" />
      </div>
    </>
  );
};

export default TablesPage;
