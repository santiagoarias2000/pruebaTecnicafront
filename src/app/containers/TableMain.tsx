import { RuteoInterno } from "../utilities/routes/RuteoInterno";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Welcome } from "./Welcome";


export const TableMain = () =>{
    return(
        <div >
            <Header/>
            {/* <Welcome/> */}
            <SideBar/>
            <RuteoInterno/>
        </div>
    );

}