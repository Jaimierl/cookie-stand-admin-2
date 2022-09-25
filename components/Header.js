export default function Header(){

    return (
        <header className = "flex items-center p-4 justify-between bg-header-green text-text-black font-semibold">
            <h1 className = "text-4xl">Cookie Stand Admin</h1>
            <button className="px-2 py-1 bg-main-bg text-text-black font-semibold rounded-md">Overview</button>
        </header>
    )
}