function Cards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div className="p-8 border rounded shadow hover:bg-gray-200 transition">
                <h2 className="text-xl font-bold ">Students</h2>
                <p>1500</p>
            </div>
             <div className="p-8 border rounded shadow hover:bg-gray-200 transition">
                <h2 className="text-xl font-bold ">Teachers</h2>
                <p>20</p>
            </div>
            <div className="p-8 border rounded shadow hover:bg-gray-200 transition">
                <h2 className="text-xl font-bold ">Courses</h2>
                <p>30</p>
            </div>
             <div className="p-8 border rounded shadow hover:bg-gray-200 transition">
                <h2 className="text-xl font-bold ">Revenue</h2>
                <p>$ 180,000 </p>
            </div>
        </div>
    )
}

export default Cards