import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() {
  const [activeMenu, setActiveMenu] = useState(false);

  function menuClick() {
    if (activeMenu === false) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }

  const { slug } = useParams<{ slug: string}>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu={activeMenu} clickFunction={menuClick}  />
      <main className="flex flex-1 pt-[65px] sm:pt-0">
        { slug 
        ? <Video lessonSlug={slug} /> 
        : <div className="flex-1"/>}
        <Sidebar showMenu={activeMenu} />
      </main>
    </div>
  )
}