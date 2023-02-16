import Header from "../components/header";

export default function Root() {
    return (
      <>
      <Header/>
      <Header/>
        <div id="sidebar">
          <h1>Login</h1>
          <div>
            <form id="search-form" role="search">
            
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
                <h2>Ingresa con:</h2>
              <button type="submit">Google</button>
            </form>
          </div>
          <nav>
            <ul>
              
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }