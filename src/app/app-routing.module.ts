import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { NotfoundComponent } from "./notfound/notfound.component";

export const routes: Routes = [
    {
        path: "m",
        component: MouseCursorComponent
      },
      {
        path: "i",
        component: InfoBoxComponent
      },{
        path: "",
        pathMatch: "full",
        redirectTo: "/books"
      }
      /*,      
      {
        path: "**",
        pathMatch: "full",        
        component: NotfoundComponent

      }*/
    
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}