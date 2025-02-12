import './App.css';
import Cart from './components/cart/cart';

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
        </main>
    );
}

export default App;
