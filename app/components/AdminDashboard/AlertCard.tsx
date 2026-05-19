type AlertCardProps = {
    style: string;
    title: string;
    description: string;
    time: string;
    danger?: boolean;
    type: string
};

export default function AlertCard({
    style,
    title,
    description,
    time,
    danger,
    type
}: AlertCardProps) {

    return (
        <div className={`border-l-4 rounded-2xl p-4 border-${style}-600 bg-${style}-100 flex flex-col`}>
            <div className={`flex items-center justify-between text-${style}-600`}>
                <p className={`font-bold uppercase`}>
                    {type}
                </p>
                <span className="text-xs">{time}</span>
            </div>
            <h3 className="font-bold text-gray-900 mt-2">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
            {danger && (
                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-xl text-sm font-semibold">
                    Dispatch Nearby
                </button>
            )}
        </div>
    );
}
