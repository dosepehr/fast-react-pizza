import Header from './Header';
import { Outlet } from 'react-router-dom';
import CartOverview from './CartOverview';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>content</h1>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
};

export default MainLayout;
