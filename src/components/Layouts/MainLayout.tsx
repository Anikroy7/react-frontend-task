import Navbar from "../shared/Navbar";

interface OutLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<OutLayoutProps> = ({ children }) => {
    return (
        <section className="container px-8">
            <Navbar />
            
            {children}
        </section>
    );
};

export default MainLayout;
