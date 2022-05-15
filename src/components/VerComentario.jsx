import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getPublishedComentarios } from '../api/Comentario.api';

const VerComentario = () => {

    const { id }            = useParams();
	const [ comentarios, setComentarios ] = useState([]);
	
	useEffect(() => {
		getPublishedComentarios().then(comentarios => {
			setComentarios(comentarios);
		});
	}, []);

  return (
      <>
        <h2>VerComentario</h2>
        <section className='mt-6 mb-6 p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-500">Comentarios</h5>
                </div>
                { comentarios.map (c => (
                    <div key={ c.id } className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col gap-2">
                        <Link to={ `/post/${ c._id }` }>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ c._name }</h5>
                        </Link>
                        <p className="font-normal text-gray-700">{ c._text }</p>
                    </div>
				    )
				) }
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        nombreusuario { comentarios.name }
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        "comentario" { comentarios.text }
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
  )
}

export default VerComentario