import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import SubcriptionCard from "@/Components/SubcriptionCard";


export default function SubcriptionPlan() {
    return (
        <>
            <Head title="Pricing" />
            <Authenticated>
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
                        <SubcriptionCard name="Basic" price={299000} durationInMonth={3} features={["Feature1","Feature2","Feature3"]}/>
                        
                        {/* <!-- For Greatest --> */}
                        <SubcriptionCard isPremium={true} name="For Greatest" price={800000} durationInMonth={12} features={["Feature1","Feature2","Feature3","Feature4","Feature5","Feature6"]} />
                        
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
                {/* <!-- END: Content --> */}
            </Authenticated>
        </>
    );
}
