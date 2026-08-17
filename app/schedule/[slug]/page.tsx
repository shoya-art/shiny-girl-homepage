import { notFound } from "next/navigation";
import { ScheduleSite } from "../../design/sites";
export default async function SchedulePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug!=="elegant"&&slug!=="friendly"&&slug!=="dynamic")notFound();return <ScheduleSite variant={slug}/>}
