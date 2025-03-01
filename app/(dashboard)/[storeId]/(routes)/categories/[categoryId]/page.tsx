import { prismadb } from "@/lib/prismadb";
import CategoryForm from "./components/categoryForm";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm
          billboards={billboards}
          initialData={category}
        ></CategoryForm>
      </div>
    </div>
  );
};

export default CategoryPage;
