import NavBar from '@app/components/NavBar';
import SideBar from '@app/components/SideBar';

export default function Home() {
  return (
    <main className="h-screen bg-white p-5">
      <NavBar />
      <div className="flex h-[calc(100vh-110px)] items-center">
        <div className="hidden md:flex mb-16 h-fit">
          <SideBar />
        </div>

      </div>
    </main>
  );
}
