import './App.css';
import TodoList from './components/dashboard/TodoList';

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
            </section>*/}
            <section>
                <TodoList />
            </section>
        </main>
    );
}

export default App;
