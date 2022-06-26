import { Logo } from "./Logo";
import classNames from 'classnames';
import { MouseEventHandler } from "react";

interface EventProps {
  activeMenu: boolean;
  clickFunction: MouseEventHandler;
}

export function Header(props: EventProps) {

  return (
    <header className="w-full py-5 flex items-start justify-around sm:justify-center bg-gray-700 border-b border-gray-600 fixed sm:relative z-50">
      <Logo />
      <div className="flex flex-row items-center sm:hidden" onClick={props.clickFunction}>
        <p className="text-[14px] text-gray-100">
          Aulas
        </p>
        {props.activeMenu ? (
          <div className="flex flex-col pl-2">
            <i className="w-6 h-[.15rem] bg-blue-500 -rotate-45"></i>
            <i className="w-6 h-[.15rem] bg-blue-500 rotate-45 transform translate-y-[-.18rem]"></i>
          </div>
        ) : (
          <div className="flex flex-col pl-2">
            <i className="w-6 h-[.15rem] bg-blue-500 mb-1"></i>
            <i className="w-6 h-[.15rem] bg-blue-500 mb-1"></i>
            <i className="w-6 h-[.15rem] bg-blue-500"></i>
          </div>
          )
        }
      </div>
    </header>
  )
}