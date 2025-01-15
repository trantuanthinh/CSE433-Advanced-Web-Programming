import './App.css';
import CarouselBanner from './components/layouts/CarouselBanner';
import MainLayout from './components/layouts/main-layout/MainLayout';

function App() {

    return (
        <main className='px-10'>
            <section>
                <CarouselBanner />
            </section>
            <section>
                <MainLayout />
            </section>
        </main>
    );
}

export default App;
