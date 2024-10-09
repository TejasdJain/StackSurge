"use client"


import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";




function Loggedheader() {
  const {user} = useKindeBrowserClient(); 
  const userImage = user?.picture;
 


  return (
    <header className=" border-b relative z-10">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between pt-3">
          

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="/"
                  >
                    
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="#"
                  >
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500 text-lg"
                    href="#"
                  >
                    Documentation{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              

              <div className="hidden sm:flex">
                <div className="rounded-full ml-4 overflow-hidden max-w-6xl flex left-0 w-fit justify-center items-center cursor-pointer border pr-5 pl-1 py-1 text-sm font-medium text-zinc-900 gap-3">
                  <Image src={ userImage || "" } alt="Profile" width={40} height={40} className=" overflow-hidden rounded-full border border-gray-100"  />
                  
                  <div className="flex flex-col">
                      <div className="text-xs text-gray-800">Welcome</div>
                      <div className="text-sm">{user?.given_name}</div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Loggedheader;
