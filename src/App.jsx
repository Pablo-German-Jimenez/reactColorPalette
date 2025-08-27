import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const colorLocalStorage = JSON.parse(localStorage.getItem('color') )|| [];
  const [color, setColor] = useState([colorLocalStorage]);
  useEffect(() => {
    localStorage.setItem('color',JSON.stringify(color))
  
    let colorNuevo = document.getElementById('color-cambia');
    colorNuevo.style.background = color;
  
  },[color], 
  

)
  
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/barron.jpg')",
          minHeight: "100vh",
          padding: "100px",
          backgroundPosition: "center",
          
          objectFit: "cover",
        }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxShadow: "0 2px 8px #0002",
            padding: "32px",
            backgroundSize: "cover",
          }}
        >
          <h3 style={{ marginBottom: "24px", textAlign:'center' ,color: 'orange'}}>Choice your floor to spin♪</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#eaf4fb",
              padding: "24px",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: color || "#681b1bff",
                borderRadius: "4px",
                marginRight: "24px",
              }}
            ></div>
            <input
              type="text"
              placeholder="Ingrese un color ej Blue"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginRight: "16px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                flex: 1,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 2px 8px #0002",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                Nombre color
              </div>
              <div
              id="color-cambia"
                style={{
                  width: "80px",
                  height: "80px",
                  background: '#600c86ff',
                  margin: "0 auto 16px",
                  borderRadius: "4px",
                }}
              ></div>
              <button
                style={{
                  background: "#ff3b2f",
                  color: "#fff",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Borrar
              </button>
            </div>
            <div
              style={{
                flex: 1,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 2px 8px #0002",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                Nombre color
              </div>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#f7b39a",
                  margin: "0 auto 16px",
                  borderRadius: "4px",
                }}
              ></div>
              <button
                style={{
                  background: "#ff3b2f",
                  color: "#fff",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Borrar
              </button>
            </div>
            <div
              style={{
                flex: 1,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 2px 8px #0002",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                Nombre color
              </div>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#e57bb2",
                  margin: "0 auto 16px",
                  borderRadius: "4px",
                }}
              ></div>
              <button
                style={{
                  background: "#ff3b2f",
                  color: "#fff",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterBboyLinkinStyle/>
    </>
  );
}

export default App;
