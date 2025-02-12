import './App.css';
import Cart from './components/cart/cart';
import SearchBox from './components/shared/SearchBox';

function App() {

    return (
        <main className='px-10'>
            {/* <section>
                <CarouselBanner />
            </section>
            <section>
                <MainLayout />
            </section> 
            <section>
                <Dashboard />
            </section>
            <section>
                <TodoList />
            </section> */}
            <section><Cart /></section>
            <section><SearchBox /></section>
        </main>
    );
}

export default App;
