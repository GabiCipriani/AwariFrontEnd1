import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details, Error, Home } from '../Pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;