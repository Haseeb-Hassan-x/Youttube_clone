import { useRouter } from "next/router"
import type { Video } from "./videos";
import { Line } from "./Line"

export const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={video.thumbnailImage} />
                <Line progress={10} />
            </div>
        </div>
        <div className="flex">
            <img src= {video.channelImage} className="rounded-full h-12 w-12 p-2" />
            <div>
            <div className={"text-white-800 text-md"}>
                {video.title}
            </div>
            <div className={"text-gray-400 text-sm"}>
                {video.channelName}
            </div>
            <div className="flex">
                <div className={"text-gray-400 text-sm pr-2"}>
                {video.views} 
            </div>
            <div className={"text-gray-400 text-sm"}>
            • {video.timestamp}
            </div>
        </div>
        </div>
        </div>
    </div>
}