import { BuildSettings, NetlifySite } from "./types";


export interface CreateSiteRequest extends Partial<NetlifySite> {
    repo?: BuildSettings;
}

export interface CreateSiteResponse extends NetlifySite {
    repo: BuildSettings;
}
