export function Tabs({ children, Buttons }) {
    return (
        <>
            <menu>
                {Buttons}
            </menu>
            {children}
        </>

    );
}