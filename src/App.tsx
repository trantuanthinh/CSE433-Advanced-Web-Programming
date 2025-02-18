import './App.css';
import Cart from './components/cart/Cart';
import TodoList from './components/dashboard/TodoList';
import SearchBox from './components/shared/SearchBox';
import FilterUser from './components/users/filterUser';

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
            </section> */}
            <section>
                <FilterUser />
            </section>
            <section>
                <TodoList />
            </section>
            <section>
                <Cart />
            </section>
            <section>
                <SearchBox />
            </section>
        </main>
    );
}

export default App;
