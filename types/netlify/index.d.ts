import { ListSites, DeleteSite, CreateSiteRequest, NetlifyApiOptions, NetlifyException, NetlifySite } from './types';
import { CreateSiteResponse } from './create_site';


/**
 * Netlify API
 */
declare class NetlifyAPI {

    /**
     *
     * @param netlifyToken Pass netlify token
     */
    constructor(netlifyToken: string, ops?: NetlifyApiOptions);

    /**
     * List netlify sites
     */
    listSites: (data?: ListSites) => Promise<NetlifySite[]>;

    /**
     * Create a netlify site
     */
    createSite: (site: { body: CreateSiteRequest }) => Promise<CreateSiteResponse>;

    /**
     * Delet a netlify site
     */
    deleteSite: (site: DeleteSite) => Promise<void>;

    getSite: (site: {id: string}) => Promise<NetlifySite>;
}
export = NetlifyAPI;
