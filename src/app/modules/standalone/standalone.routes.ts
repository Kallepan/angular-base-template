import { Route, Routes } from "@angular/router";
import { StandaloneOneComponent } from "./components/standalone-one/standalone-one.component";
import { StandaloneTwoComponent } from "./components/standalone-two/standalone-two.component";

export const routes: Route[] = [
    {
        path: '',
        component: StandaloneOneComponent,
    },
    {
        path: 'two',
        component: StandaloneTwoComponent,
    },
];