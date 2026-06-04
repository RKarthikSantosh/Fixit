"use client";
import { useSearchParams } from "next/navigation";
import { getServicesByCategory } from "@/data/homeservices";
import Link from "next/link";
import Image from "next/image"; // Import Image for icons
import { Suspense } from "react";

const CategoryServicesContent = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    if (!category) {
        return <p className="text-center p-8 text-xl dark:text-gray-200">Invalid category selected.</p>;
    }

    const services = getServicesByCategory(category);

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6 transition-colors duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 w-full max-w-5xl transition-colors duration-300">
                {/* Responsive Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-300 break-words">
                    {category.toUpperCase()}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-gray-300">
                    {services.map((service) => (
                        <Link key={service.name} href={`/homeservices/service/${encodeURIComponent(service.name)}`}>
                            <div className="w-full bg-gray-50 dark:bg-gray-700 shadow-md rounded-2xl p-4 sm:p-6 text-center transform transition duration-300 hover:shadow-lg cursor-pointer flex flex-col h-full">
                                <div className="flex items-center mb-2"> {/* Flex container for icon and text */}
                                    <div className="w-10 h-10 mr-4 flex-shrink-0 flex items-center justify-center"> {/* Increased size and centered */}
                                        <Image
                                            src={service.icon} // Use the icon property from the service object
                                            alt={`${service.name} Icon`}
                                            width={40} // Increased width
                                            height={40} // Increased height
                                            className="object-contain" // Ensure the icon fits well
                                        />
                                    </div>
                                    <h2 className="text-lg sm:text-xl font-semibold dark:text-gray-300">
                                        {service.name}
                                    </h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CategoryServicesPage = () => {
    return (
        <Suspense fallback={<p className="text-center p-8 text-xl dark:text-gray-200">Loading...</p>}>
            <CategoryServicesContent />
        </Suspense>
    );
};

export default CategoryServicesPage;