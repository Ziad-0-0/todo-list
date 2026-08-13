import { useState } from "react";

export const AddTask = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <div className="add-task">
                <button
                    className="add"
                    onClick={() => {
                        if (inputValue.trim()) {
                            onAdd(inputValue);
                            setInputValue("");
                        }
                    }}
                ></button>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="create a new to do"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && inputValue.trim()) {
                            onAdd(inputValue);
                            setInputValue("");
                        }
                    }}
                />
            </div>
        </>
    );
};
