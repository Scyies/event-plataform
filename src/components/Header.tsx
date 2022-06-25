import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-start justify-around sm:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="flex flex-row items-center sm:hidden">
        <p className="text-[14px] text-gray-100">
          Aulas
        </p>
        <div className="flex flex-col pl-2">
          <i className="w-6 h-[.15rem] bg-blue-500 mb-1"></i>
          <i className="w-6 h-[.15rem] bg-blue-500 mb-1"></i>
          <i className="w-6 h-[.15rem] bg-blue-500"></i>
        </div>
        {/* <div className="flex flex-col pl-2">
          <i className="w-6 h-[.15rem] bg-blue-500 rotate-45"></i>
          <i className="w-6 h-[.15rem] bg-blue-500 -rotate-45"></i>
        </div> */}
      </div>
    </header>
  )
}