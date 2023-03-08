import Root from "./root";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import '@testing-library/jest-dom'
  import { loginWithGoogle } from "../firebase/firebaseConfig"

  // MOCK CREADO PARA LOGINWITHGOOGLE 
  jest.mock("../firebase/firebaseConfig",() =>({ 
    loginWithGoogle:jest.fn( () => Promise.resolve({ user: {displayName: "hola", email:'nat.faundezc@gmail.com'}}))
  }));

  // TEST DE LA VISTA ROOT
  describe('test de funcion Root',()=>{
    // primer it sobre renderizacion
    it ('se renderiza el texto de root', ()=>{
      const router = createBrowserRouter([ // traje el router de main,jsx ya que el error lo pedia
      {
        path: "/",
        element: <Root />,
      },
    ]); 
    const screen = render(<React.StrictMode> 
            <RouterProvider router={router} />
          </React.StrictMode>);
expect (screen.getByText('¡No olvides dejar tus notas!')).toBeInTheDocument()       
    });
    // segundo it de renderizacion tambien de texto
    it ('se renderiza el texto de root', ()=>{
      const router = createBrowserRouter([ // traje el router de main,jsx ya que el error lo pedia
      {
        path: "/",
        element: <Root />,
      },
    ]); 
    const screen = render(<React.StrictMode> 
            <RouterProvider router={router} />
          </React.StrictMode>);
expect (screen.getByText('Ingresa con:')).toBeInTheDocument()       
    });
// ultimo it usamos mock para ver si el boton ejecuta la funcion
    it ('si el boton llama a la funcion y la ejecuta', ()=>{
        const router = createBrowserRouter([ 
            {
              path: "/",
              element: <Root />,
            },
          ]); 
          render(<React.StrictMode> 
            <RouterProvider router={router} />
          </React.StrictMode>);
          loginWithGoogle.mockResolvedValue( {user: {displayName: "hola", email:'nat.faundezc@gmail.com'}})
          fireEvent.click(screen.getByText(/Google/i))
          expect(loginWithGoogle).toHaveBeenCalled(); 
        })
      });