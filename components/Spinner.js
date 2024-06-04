export default function Spinner() {
    return (
        <div className="min-h-screen flex items-center justify-center space-x-2">
            <div className="w-10 h-10 border-t-4 border-gray-200 rounded-full spin spinner"></div>
            <p>Loading...</p>
        </div>
    );
}
