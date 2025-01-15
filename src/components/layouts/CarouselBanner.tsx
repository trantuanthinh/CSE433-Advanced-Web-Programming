export default function CarouselBanner() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 p-4 items-center justify-center place-items-center">
            <div className="row-span-2">
                <img src="https://placehold.co/620x360" alt="Banner" />
            </div>
            <div >
                <img src="https://placehold.co/320x170" alt="Banner" />

            </div>
            <div className="col-start-2 row-start-2">
                <img src="https://placehold.co/320x170" alt="Banner" />
            </div>
        </div>
    );
}