"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { columns, ColorColumn } from "./columns";
import { DataTable } from "@/components/ui/dataTable";
import { ApiList } from "@/components/ui/apiList";

interface ColorsClientProps {
  data: ColorColumn[];
}

const ColorsClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator></Separator>
      <DataTable columns={columns} data={data} searchKey="name"></DataTable>
      <Heading title="API" description="API calls for colors"></Heading>
      <Separator></Separator>
      <ApiList entityName="colors" entityIdName="colorId"></ApiList>
    </>
  );
};

export default ColorsClient;
