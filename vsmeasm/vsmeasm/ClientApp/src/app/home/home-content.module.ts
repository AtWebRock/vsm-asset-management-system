import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatMaterialModule } from "../app.mat.material.module";
import { AssetMasterComponent } from "../asset-master/asset-master.component";
import { HomeContentComponent } from "./home-content.component";
import { homeRoutes } from "./home-content.routing";


@NgModule({
    declarations:[
        HomeContentComponent,
        AssetMasterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatMaterialModule,
        RouterModule.forChild(homeRoutes)
    ]
   
})

export class HomeContentModule {}