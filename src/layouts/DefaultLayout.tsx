import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ContainerLayout } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </>
  );
}
