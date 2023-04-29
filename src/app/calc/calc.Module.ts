import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { calcComponent } from "./calc.Component";


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        calcComponent
    ],
    exports:[
        calcComponent
    ]
})

export class calcModule{}