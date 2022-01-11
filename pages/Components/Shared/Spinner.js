const Spinner = () => {
    return (
        <div className="flex justify-center items-center py-32">
            <div
                className="animate-spin rounded-full h-32 w-32 border-b-2 border-neutral"
            ></div>
        </div>
    );
};

export default Spinner;