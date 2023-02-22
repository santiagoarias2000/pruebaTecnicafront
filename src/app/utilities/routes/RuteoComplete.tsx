import {lazy} from "react";
import {Routes, Route} from "react-router-dom";
import { TableMain } from "../../containers/TableMain";

import { LogIn } from "../../views/public/LogIn";
import { SingIn } from "../../views/public/SingIn";
import { NoFound } from "../../views/shared/NoFound";
import { ClassVideo } from "../../views/private/ClassVideo";

const LazyLog = lazy(() => import("../../views/public/LogIn").then(()=>({default: LogIn})));
const LazySign = lazy(() => import("../../views/public/SingIn").then(()=>({default: SingIn})));
const LazyNoFound = lazy(() => import("../../views/shared/NoFound").then(()=>({default: NoFound})));
const LazyDashBoard = lazy(() => import("../../containers/TableMain").then(()=>({default: TableMain})));

const LazyVideo = lazy(() => import("../../views/private/ClassVideo").then(()=>({default: ClassVideo})));



export const RuteoComplete = () =>{
    return(
        <Routes>
            <Route path="/" element={<LazyLog/>}/>
            <Route path="/register" element={<LazySign/>}/>

            <Route path="/home/*" element={<LazyDashBoard/>}/>
            
            <Route path="*" element={<LazyNoFound/>}/>
        </Routes>
    );

};