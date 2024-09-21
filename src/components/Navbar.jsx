export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-5 items-center container mx-auto">
        <h1 className="text-3xl font-mono">MikroMerce</h1>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button className="text-3xl">&#9776;</button>
        </div>

        {/* Menu Utama */}
        <ul className="hidden md:flex gap-3">
          <li>
            <a href="#" className="hover:underline hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-500">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-500">
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
