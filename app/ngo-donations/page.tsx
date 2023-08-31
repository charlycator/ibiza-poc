import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="NGO's donations" />

      <div className="flex flex-col gap-10">
        <TableOne title="Your donations" />
      </div>
    </>
  );
};

export default TablesPage;
