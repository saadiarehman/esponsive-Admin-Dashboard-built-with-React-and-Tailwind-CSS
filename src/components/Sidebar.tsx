function Sidebar(){
    return(
        <aside className="flex flex-col p-4 text-center items-center shadow md:w-64">
            
            <a href="#" className="p-4 hover:bg-gray-200 rounded shadow transition w-58"> 🏠 Dashboard</a>
            <a href="#" className="p-4 hover:bg-gray-200 rounded shadow transition w-58"> 👨 Students</a>
            <a href="#" className="p-4 hover:bg-gray-200 rounded shadow transition w-58" > 👩 Teachers</a>
            <a href="#" className="p-4 hover:bg-gray-200 rounded shadow transition w-58"> 📚 Courses</a>
            <a href="#" className="p-4 hover:bg-gray-200 rounded shadow transition w-58"> ⚙ Settings</a>
        </aside>
    )
}

export default Sidebar
