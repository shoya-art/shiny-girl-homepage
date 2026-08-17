import { notFound } from "next/navigation";
import { ElegantSite, FriendlySite, DynamicSite } from "../sites";
export default async function DesignPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug==="elegant")return <ElegantSite/>;if(slug==="friendly")return <FriendlySite/>;if(slug==="dynamic")return <DynamicSite/>;notFound()}
