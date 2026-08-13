export const Head = ({ them, setThem }) => {
    return (
        <>
            <div className="to-do-head">
                <h1>TODO</h1>
                <button
                    onClick={() =>
                        them === "dark" ? setThem("light") : setThem("dark")
                    }
                >
                    <img
                        src={them === "dark" ? "icon-sun.svg" : "icon-moon.svg"}
                        alt=""
                    />
                </button>
            </div>
        </>
    );
};
