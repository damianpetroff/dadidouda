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
    <main className="min-h-screen p-24 bg-gradient-to-br from-blue-300 to-cyan-200">
      <div className="flex flex-col items-center justify-start gap-8 print:hidden">
        <h1 className="font-extrabold tracking-tight text-5xl pb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-cyan-50">Crée ta carte Dadidouda</h1>
        <div className="flex gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6">
              Ton prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John"
                onChange={(e) => setName1(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6">
              Ton numéro de membre
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="num"
                id="num"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="19123912"
                onChange={(e) => setNum(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-full gap-8 justify-center">
          <div className="flex flex-col text-black bg-white aspect-[3/4] rounded-3xl shadow-xl">
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
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==1?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngTop(1)} 
              >
                <Image className="p-2" src="/img/avatar/top_1.png" alt="top1" fill/>
              </button>
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==2?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngTop(2)} 
                >
                <Image className="p-2" src="/img/avatar/top_2.png" alt="top2" fill/>
              </button>
              <button
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngTop==3?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngTop(3)}
                >
                <Image className="p-2" src="/img/avatar/top_3.png" alt="top3" fill/>
              </button>
            </div>
            <div className="flex gap-8 justify-center">
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==1?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngMiddle(1)} 
              >
                <Image className="p-2" src="/img/avatar/middle_1.png" alt="mid1" fill/>
              </button>
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==2?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngMiddle(2)} 
              >
                <Image className="p-2" src="/img/avatar/middle_2.png" alt="mid2" fill/>
              </button>
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngMiddle==3?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngMiddle(3)} 
              >
                <Image className="p-2" src="/img/avatar/middle_3.png" alt="mid3" fill/>
              </button>
            </div>
            <div className="flex gap-8 justify-center">
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==1?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngBottom(1)}
                >
                <Image className="p-2" src="/img/avatar/bottom_1.png" alt="bot1" fill/>
              </button>
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==2?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngBottom(2)} 
                >
                <Image className="p-2" src="/img/avatar/bottom_2.png" alt="bot2" fill/>
              </button>
              <button 
                className={`relative h-20 w-20 rounded-full shadow-xl ring-4 bg-white overflow-hidden ${pngBottom==3?'ring-amber-300':'ring-white'}`}
                onClick={() => setPngBottom(3)} 
                >
                <Image className="p-2" src="/img/avatar/bottom_3.png" alt="bot3" fill/>
              </button>
            </div>
          </div>
        </div>
        <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => print()}
        >
          Imprimer
        </button>
      </div>
      <div className="hidden print:flex flex-col w-full justify-center items-center gap-8">
        <p className="text-xl font-bold">Ta carte à découper</p>
        <div
          className="flex w-[85.6mm] h-[53.98mm] border-2 border-dotted border-black bg-white px-4"
        >
          <div className="flex flex-col text-black aspect-[3/4] p-2">
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
          <div className="flex flex-col text-black h-full w-full items-start justify-center gap-2">
            <p className="border border-black font-semibold tracking-wide mb-4 p-4 w-full text-center">Logo</p>
            <p className="font-semibold tracking-wide">{name1}</p>
            <p className="text-xs">Membre N°{num}</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
