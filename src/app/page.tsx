'use client';
import { useState } from "react";
import Image from "next/image";

type PNGSelection = 1 | 2 | 3;

export default function Home() {
  const [pngTop, setPngTop] = useState<PNGSelection>(1)
  const [pngMiddle, setPngMiddle] = useState<PNGSelection>(1)
  const [pngBottom, setPngBottom] = useState<PNGSelection>(1)
  const [name1, setName1] = useState<string>()
  const [num, setNum] = useState<string>()

  return (
    <main className=" min-h-screen p-12 text-gray">
      <div className=" flex flex-col items-center justify-start print:hidden">

        <h1 className="font-extrabold tracking-tight text-5xl">Crée ta carte Dadidouda</h1>
        <div className="relative flex flex-col items-center justify-between px-12">
          <img src="/img/stars.png" alt='stars' className="absolute w-[400px] h-[400px] -top-16 -left-40 object-contain -z-10"/>
          <img src="/img/stars_2.png" alt='stars' className="absolute w-[300px] h-[200px] -bottom-8 -right-56 object-contain -z-10"/>
          <div className="flex gap-8 pt-8">
            <div>
              <label htmlFor="name" className="block tracking-tighter">
                Ton prénom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-xl border-0 py-2 px-4 text-gray-900 shadow-sm ring-4 ring-inset ring-blue placeholder:text-gray-400 focus:ring-4 focus:ring-blue sm:text-sm sm:leading-6"
                  placeholder="John"
                  onChange={(e) => setName1(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block tracking-tighter">
                Ton numéro de membre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="num"
                  id="num"
                  className="block w-full rounded-xl border-0 py-2 px-4 text-gray-900 shadow-sm ring-4 ring-inset ring-blue placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  placeholder="19123912"
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex h-[400px] w-full gap-8 my-12 justify-center">
            <div className="flex flex-col text-black bg-white aspect-[3/4] rounded-3xl shadow-xl ring-4 ring-pink">
              <div className="flex h-full justify-center">
                <div className="relative aspect-square">
                  <Image className="" src={`/img/avatar/top_${pngTop}.png`} alt="selected-top" fill/>
                </div>
              </div>
              <div className="flex h-full justify-center">
              <div className="relative aspect-square">
                <Image className="" src={`/img/avatar/middle_${pngMiddle}.png`} alt="selected-top" fill/>
                </div>
              </div>
              <div className="flex h-full justify-center">
              <div className="relative aspect-square">
                <Image className="" src={`/img/avatar/bottom_${pngBottom}.png`} alt="selected-top" fill/>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full justify-around">
              <div className="flex gap-8 justify-center">
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==1?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngTop(1)} 
                >
                  <Image className="p-2" src="/img/avatar/top_1.png" alt="top1" fill/>
                </button>
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==2?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngTop(2)} 
                  >
                  <Image className="p-2" src="/img/avatar/top_2.png" alt="top2" fill/>
                </button>
                <button
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==3?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngTop(3)}
                  >
                  <Image className="p-2" src="/img/avatar/top_3.png" alt="top3" fill/>
                </button>
              </div>
              <div className="flex gap-8 justify-center">
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==1?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngMiddle(1)} 
                >
                  <Image className="p-2" src="/img/avatar/middle_1.png" alt="mid1" fill/>
                </button>
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==2?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngMiddle(2)} 
                >
                  <Image className="p-2" src="/img/avatar/middle_2.png" alt="mid2" fill/>
                </button>
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==3?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngMiddle(3)} 
                >
                  <Image className="p-2" src="/img/avatar/middle_3.png" alt="mid3" fill/>
                </button>
              </div>
              <div className="flex gap-8 justify-center">
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==1?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngBottom(1)}
                  >
                  <Image className="p-2" src="/img/avatar/bottom_1.png" alt="bot1" fill/>
                </button>
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==2?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngBottom(2)} 
                  >
                  <Image className="p-2" src="/img/avatar/bottom_2.png" alt="bot2" fill/>
                </button>
                <button 
                  className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==3?'ring-yellow':'ring-orange'}`}
                  onClick={() => setPngBottom(3)} 
                  >
                  <Image className="p-2" src="/img/avatar/bottom_3.png" alt="bot3" fill/>
                </button>
              </div>
            </div>
          </div>
          <button
          type="button"
          className="rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg ring-4 ring-inset ring-blue hover:bg-gray-50"
          onClick={() => print()}
          >
            Imprimer
          </button>
        </div>
      </div>
      <div className="hidden print:flex flex-col w-full justify-center items-center gap-8">
        <p className="text-xl font-bold">Ta carte à découper</p>
        <div
          className="flex w-[85.6mm] h-[53.98mm] border-2 border-dotted border-black bg-white"
        >
          <div className="flex flex-col w-2/5 text-black aspect-[3/4] p-2">
            <div className="flex h-full justify-center">
              <div className="relative aspect-square">
                <Image className="" src={`/img/avatar/top_${pngTop}.png`} alt="selected-top" fill/>
              </div>
            </div>
            <div className="flex h-full justify-center">
            <div className="relative aspect-square">
              <Image className="" src={`/img/avatar/middle_${pngMiddle}.png`} alt="selected-top" fill/>
              </div>
            </div>
            <div className="flex h-full justify-center">
            <div className="relative aspect-square">
              <Image className="" src={`/img/avatar/bottom_${pngBottom}.png`} alt="selected-top" fill/>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-black w-3/5 h-full items-start justify-start gap-2">
            <div className="relative w-full h-24">
              <Image className="" src={`/img/logo.png`} alt="logo" fill style={{objectFit: 'contain', objectPosition:'center center'}}/>
            </div>
            <p className="font-semibold tracking-wide">{name1}</p>
            <p className="text-xs">Membre N°{num}</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
