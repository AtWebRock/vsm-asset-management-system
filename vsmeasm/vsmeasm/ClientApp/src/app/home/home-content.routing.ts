import { Routes } from "@angular/router";
import { AssetMasterComponent } from "../asset-master/asset-master.component";
import { StoreMasterComponent } from "../store-master/store-master.component";
import { HomeContentComponent } from "./home-content.component";

export const homeRoutes: Routes = [  
    {
        path: 'home-content',
        component: HomeContentComponent,
        children: [
            {
                path: 'asset-master',
                component: AssetMasterComponent
            },
            {
            path: 'store-master',
            component: StoreMasterComponent
            }
        ]
    },]