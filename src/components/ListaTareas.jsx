import { TareasCards } from "./TareasCards"

export const ListaTareas = () => {
  return (
    <>
    <h2 className="subtitle">Tareas</h2>
    <div className="tareas-container">
        {arrayTareas.map(({tarea,descripcion})=>(
            // <p><span className="bold">{tarea} - </span>{descripcion}</p>
            <TareasCards tarea={tarea} descripcion={descripcion} key={key}/>
        ))}
    </div>
    </>
  )
}
