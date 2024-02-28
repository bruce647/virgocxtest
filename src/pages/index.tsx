
import { Inter } from "next/font/google";
import { EditFormCard } from "@/components/edit-form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <EditFormCard />
    </div>
  )
}
