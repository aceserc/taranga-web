import { Footer } from "@/components/globals/footer";
import { Header } from "./_components/header";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* bg image */}
      <div
        className="fixed inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-[0.03]"
        style={{ backgroundImage: "url(/assets/images/vr.avif)" }}
      />
      <Header />
      <main className="mt-14 overflow-y-auto overflow-x-hidden relative z-10 backdrop-blur-sm">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
