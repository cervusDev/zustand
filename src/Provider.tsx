import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service/queryClient";

interface IProvider {
  children: ReactNode;
}

export function Provider({ children }: IProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
