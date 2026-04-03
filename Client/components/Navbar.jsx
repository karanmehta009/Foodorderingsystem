import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div>
            <h1 onClick={() => navigate("/home")}>
                FOOD ORDERING WEBSITE
            </h1>

            <div>
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/cart")}>Cart</button>
                <button onClick={() => navigate("/orders")}>Orders</button>

                {/* Admin only */}
                {user?.role === "admin" && (
                    <button onClick={() => navigate("/admin/orders")}>Admin Orders</button>
                )}

                {/* Logout */}
                {user && (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </div>
        </div>
    );
}

export default Navbar;