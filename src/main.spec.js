import Wall from "./Vistas/wall";
import Root from "./routes/root";
import React from 'react';
import { render } from '@testing-library/react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
  describe('test de rutas en main',()=>{
    it ('la ruta Wall se renderiza', ()=>{
        const router = createBrowserRouter([ // traje el router de main,jsx ya que el error lo pedia
            {
                path:'wall/:wallId',
                element: <Wall/>
              
            },
        ]); // el render tambien viene de main, sin esto  no funcionaba esto esto que esta en Create ROOT
        render(<React.StrictMode> 
            <RouterProvider router={router} />
          </React.StrictMode>);
    })
    it ('la ruta root se renderiza', ()=>{
        const router = createBrowserRouter([ // traje el router de main,jsx ya que el error lo pedia
            {
              path: "/",
              element: <Root />,
              
            },
        ]); // el render tambien viene de main, sin esto  no funcionaba esto esto que esta en Create ROOT
        render(<React.StrictMode> 
            <RouterProvider router={router} />
          </React.StrictMode>);
    })
    //it() hacer funcion sobre si al apretar el botyon de verdad ingresa con google para eso usar mocks
});
