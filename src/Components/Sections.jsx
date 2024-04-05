export function Sections({title, children, id}){
    return(
        <section id={id}>
          <h2>{title}</h2>
          {children}
        </section>
    );
}