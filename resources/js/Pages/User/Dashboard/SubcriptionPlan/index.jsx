import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import SubcriptionCard from "@/Components/SubcriptionCard";
import { Inertia } from '@inertiajs/inertia'


export default function SubcriptionPlan({auth, subcriptionPlans}) {
    const selectSubcription = id => {
      alert('Please select a subscription');
      Inertia.post(route('user.dashboard.subcriptionPlan.userSubcribe', {
        subcriptionPlan: id 
      }))
    }


    return (
        <>
            <Head title="Pricing" />
            <Authenticated auth={auth}>
                {/* <!-- START: Content --> */}
                <div className="flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {/* <!-- Basic --> */}
                        {subcriptionPlans.map((subcriptionPlan, index) => {
                          return (
                              <SubcriptionCard
                                  name={subcriptionPlan.name}
                                  price={subcriptionPlan.price}
                                  durationInMonth={
                                      subcriptionPlan.active_period_in_month
                                  }
                                  features={JSON.parse(
                                      subcriptionPlan.features
                                  )}
                                  key={`${index}-${subcriptionPlan.id}-${subcriptionPlan.name}`}
                                  isPremium={subcriptionPlan.name === "Premium"}
                                  onSelectSubcription={() => selectSubcription(subcriptionPlan.id) }
                              />
                          );
                        })}
                        {/* <SubcriptionCard name="Basic" price={1222} durationInMonth={3} features={["Feature1","Feature2","Feature3"]}/> */}
                        
                        {/* <!-- For Greatest --> */}
                        {/* <SubcriptionCard isPremium={true} name="For Greatest" price={800000} durationInMonth={12} features={["Feature1","Feature2","Feature3","Feature4","Feature5","Feature6"]} /> */}
                        
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
                {/* <!-- END: Content --> */}
            </Authenticated>
        </>
    );
}
