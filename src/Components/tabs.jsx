export function Tabs({ children, Buttons, ElementContainer }) {
    return (
        <>
            <ElementContainer>
                {Buttons}
            </ElementContainer>
            {children}
        </>

    );
}