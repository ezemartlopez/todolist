import Navbar from "@appcomponents/Navbar";
import BackGroundImage from "@components/BackGroundImage";
import UseMode from "@functions/UseMode";
import PanelTasks from "@appcomponents/PanelTasks";


export default function App() {
  const {toggleMode, mode} = UseMode();
  return (
    <div className={"w-screen h-screen " + (mode? "dark": "")}>
      <div className="relative size-full dark:bg-slate-900 bg-slate-100 transition-colors ease-in duration-500">
        <div className="absolute z-0 w-full h-[300px] bg-purple-800 ">
          <BackGroundImage modeActive={mode}/>
        </div>
        <main className="absolute z-10 w-full px-4 sm:px-8 h-full flex justify-center">
          <div className="sm:w-[540px] w-full h-full pt-16 flex flex-col">
            <Navbar toggle={toggleMode} modeActive={mode}/>
            <PanelTasks/>
          </div>
        </main>
      </div>
    </div>
  );
}