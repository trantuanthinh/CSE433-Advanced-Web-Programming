export default function CategoryTitle({title}: {title: string;}) {
    return (
        <div className="w-full border-dashed border-y-2 mb-2">
            <p className="font-bold uppercase py-1 border-l-4 border-l-[#793aa9] pl-1">{title}</p>
        </div>
    );
}