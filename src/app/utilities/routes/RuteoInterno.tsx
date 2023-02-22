import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { NoFound } from "../../views/shared/NoFound";
import { ClassVideo } from "../../views/private/ClassVideo";

const LazyNoFound = lazy(() => import("../../views/shared/NoFound").then(()=>({default: NoFound})));
const LazyVideo = lazy(() => import("../../views/private/ClassVideo").then(()=>({default: ClassVideo})));

export const RuteoInterno = () =>{
    return(
        <Routes>
            <Route path="*" element={<LazyNoFound/>}/>
            <Route path="/video" element={<LazyVideo/>}/>

        </Routes>
    );

};