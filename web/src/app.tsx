import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/react-query";
import { Toaster } from "sonner";

export function App() {
  return (
    <main className="h-dvh w-dvw bg-gray-200">
      <QueryClientProvider client={queryClient} >
        <Toaster richColors />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </main>
  )
}