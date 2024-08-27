import { Searchbar } from "./Searchbar"
import { Singin } from "./Signin"
import { YtLogo } from "./YtLogo"

export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div className="inline-flex items-center">
            <YtLogo />
        </div>
        <div>
            <Searchbar />
        </div>
        <div className="inline-flex items-center">
            <Singin />
        </div>
    </div>
}