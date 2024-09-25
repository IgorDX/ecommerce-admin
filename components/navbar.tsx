import { UserButton } from "@clerk/nextjs"
import { MainNav } from "./mainNav"
import StoreSwitcher from "./storeSwitcher"
import { auth } from "@clerk/nextjs/server"
import { prismadb } from "@/lib/prismadb"
import { redirect } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const Navbar = async () => {
  const { userId } = auth()
  if (!userId) redirect("/sign-in")
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  })
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores}></StoreSwitcher>
        <MainNav className="mx-6"></MainNav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle></ThemeToggle>
          <UserButton></UserButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
