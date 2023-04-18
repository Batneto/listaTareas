export const Formulario = () => {
  return (
    <>
    <h1 className="title">Lista de tareas</h1>
    <form className="form" onSubmit={handlerSubmit}>
        <h2 className="subtitle">Añadir tarea</h2>
        <input className="i-form" id="tarea" name="tarea" type="text" onChange={handlerChange} placeholder="Tarea"/>
        <input className="ta-form" id="descripcion" name="descripcion" type="textarea" onChange={handlerChange} placeholder="Descripcion"/>
        <input className="s-form" type="submit" value="Nueva tarea"/>
    </form>
    </>
  )
}
