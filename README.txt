to it works change the C:\Users\Luffy\Desktop\RocketSeat\JS FASE 9\Front-with-React--RocketNotes-\rocketnotes\src\Routes the section:

import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";

export function Routes() {
    return (
        <BrowserRouter>
            <AuthRoutes /> (CHANGE THIS TO  <AppRoutes />)
        </BrowserRouter>
    )
}