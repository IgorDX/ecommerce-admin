"use client";

import { Heading } from "@/components/heading";

import { Separator } from "@/components/ui/separator";

import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      ></Heading>

      <Separator></Separator>
      <DataTable columns={columns} data={data} searchKey="products"></DataTable>
    </>
  );
};

export default OrderClient;
