export default function TabButton({label , OnSelect}) {

    return (
        <li>
            <button onClick={OnSelect}>
            { label }
            </button>
        </li>
    );
}