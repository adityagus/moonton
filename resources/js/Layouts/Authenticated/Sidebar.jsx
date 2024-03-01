import { Link } from "@inertiajs/inertia-react";
import SubcriptionDetail from "./SubcriptionDetail";
import MenuItem from "./MenuItem";
import { userMenu, userOther } from "./MenuList";

export default function sidebar({ auth }) {
    console.log("ini auth dari sidebar", auth);

    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenu.map((userMenuItem, index) =>{
                          <h1>{userMenuItem}</h1>
                          return (<MenuItem key={`${index}-${userMenuItem}`} link={userMenuItem.link} icon={userMenuItem.icon} text={userMenuItem.text} isActive={userMenuItem.link && route().current(userMenuItem.link)} method={userMenuItem.method}/>
                          )
                        })}
                    </div>
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {
                          userOther.map((userOtherItem, index) => {
                            return (
                              <MenuItem key={`${index}-${userOtherItem}`} link={userOtherItem.link} icon={userOtherItem.icon} text={userOtherItem.text} isActive={userOtherItem.link && route().current(userOtherItem.link)} method={userOtherItem.method} />
                            )
                          })
                        }
                    </div>
                    {/* Subcription Details */}

                    {/* halo{ JSON.stringify(auth) } */}

                    {auth.activePlan && (
                        <SubcriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name == "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}

                    {/* Subcription Details */}
                </div>
            </div>
        </aside>
    );
}
