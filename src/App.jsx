import './App.css'

function App() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "40px" }}>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "6px",
        boxShadow: "0 2px 8px #0002",
        padding: "32px"
      }}>
        <h3 style={{ marginBottom: "24px" }}>Administrar colores</h3>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#eaf4fb",
          padding: "24px",
          borderRadius: "6px"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#2d1582",
            borderRadius: "4px",
            marginRight: "24px"
          }}></div>
          <input
            type="text"
            placeholder="Ingrese un color ej Blue"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginRight: "16px"
            }}
          />
          <button style={{
            background: "#2196f3",
            color: "#fff",
            border: "none",
            padding: "10px 24px",
            borderRadius: "4px",
            boxShadow: "2px 2px 6px #0002",
            cursor: "pointer"
          }}>Guardar</button>
        </div>
        <div style={{
          display: "flex",
          gap: "24px",
          marginTop: "40px"
        }}>
          <div style={{
            flex: 1,
            background: "#fff",
            borderRadius: "6px",
            boxShadow: "0 2px 8px #0002",
            padding: "16px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>Nombre color</div>
            <div style={{
              width: "80px",
              height: "80px",
              background: "#2d1582",
              margin: "0 auto 16px",
              borderRadius: "4px"
            }}></div>
            <button style={{
              background: "#ff3b2f",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer"
            }}>Borrar</button>
          </div>
          <div style={{
            flex: 1,
            background: "#fff",
            borderRadius: "6px",
            boxShadow: "0 2px 8px #0002",
            padding: "16px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>Nombre color</div>
            <div style={{
              width: "80px",
              height: "80px",
              background: "#f7b39a",
              margin: "0 auto 16px",
              borderRadius: "4px"
            }}></div>
            <button style={{
              background: "#ff3b2f",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer"
            }}>Borrar</button>
          </div>
          <div style={{
            flex: 1,
            background: "#fff",
            borderRadius: "6px",
            boxShadow: "0 2px 8px #0002",
            padding: "16px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>Nombre color</div>
            <div style={{
              width: "80px",
              height: "80px",
              background: "#e57bb2",
              margin: "0 auto 16px",
              borderRadius: "4px"
            }}></div>
            <button style={{
              background: "#ff3b2f",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer"
            }}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;