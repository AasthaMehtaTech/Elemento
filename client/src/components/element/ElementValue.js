import ElementContext from "../../context/element/elementContext";
export const element_value = async () => {
    const api_call = await fetch(`http://localhost:5000/api/elements`);
    const data = await api_call.json();
    return data;
}