import { Suspense } from "react";
import ServiceList from "@/components/ServiceList"

const ServiceListPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceList /> 
    </Suspense>
  )
}

export default ServiceListPage