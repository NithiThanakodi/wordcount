import { Route, Routes } from "react-router-dom";
import { HomePage, JokePage, NotFoundPage } from "../pages";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/joke" element={<JokePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}
