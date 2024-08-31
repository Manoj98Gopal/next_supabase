import ContextProvider from "@/Context/ContextProvider";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <main>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </main>
  );
}
