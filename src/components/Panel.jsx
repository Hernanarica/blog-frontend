import { useState, useEffect } from "react";
import { getAllPosts, Published, borrarPost } from "../api/Post.api";
import { Link } from "react-router-dom";
import { PencilAltIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";


function Panel() {
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		getAllPosts().then(posts => {
			setPosts(posts);
		});
	}, []);
	
	function update(id) {
		Published(id).then(() => {
			getAllPosts().then(posts => {
				setPosts(posts);
			});
		});
	}
	
	function deletePost(id) {
		borrarPost(id).then(() => {
			getAllPosts().then(posts => {
				setPosts(posts);
			});
		});
	}
	
	return (
		<section className="wrapper-panel container pt-20 px-2">
			<h2 className="panel__h2">
				Panel de control
			</h2>
			<div className="flex flex-col">
				<div className="overflow-x-auto shadow-md sm:rounded-lg">
					<div className="inline-block min-w-full align-middle">
						<div className="p-4">
							<label htmlFor="table-search" className="sr-only">Buscar</label>
							<div className="relative mt-1">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500">
									<SearchIcon className="h-5" />
								</div>
								<input type="text" id="table-search"
								       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
								       placeholder="Search for items" />
							</div>
						</div>
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 table-fixed">
								<thead className="bg-gray-100">
									<tr>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Status
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Título
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Texto
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{ posts.map(post => (
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={ post._id }>
											<td className="p-4 w-4">
												<div className="flex items-center">
													<form action="#">
														<input id="checkbox-search-1" type="checkbox"
														       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
															<label htmlFor="checkbox-search-1" className="sr-only">checkbox</label>
													</form>
												</div>
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{ post.title }</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">{ post.text }</td>
											<td className="py-4 px-6 text-sm font-medium whitespace-nowrap space-y-3 flex flex-col items-end">
												<Link to={ `/post/editar/${ post._id }` } className="border text-white flex items-center gap-2 rounded px-4 py-2 bg-blue-600 w-fit">
													<PencilAltIcon className="h-5" />
													Editar
												</Link>
												<button className="border text-white flex items-center gap-2 rounded px-4 py-2 bg-red-600 w-fit"
												        onClick={ () => deletePost(post._id) }
												>
													<TrashIcon className="h-5" />
													Borrar
												</button>
											</td>
										</tr>
									)) }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{/*		{ posts.map(post => (*/}
			{/*			<tr key={ post._id }>*/}
			{/*				<td>{ post.title }</td>*/}
			{/*				<td>{ post.text }</td>*/}
			{/*				<td>*/}
			{/*					<a href="/" className={ post.public ? 'btn btn-ok mb-3' : 'btn btn-habilitar mb-3' } onClick={ () => update(post._id) }>{ post.public ? 'Listo' : 'Habilitar' }</a>*/}
			{/*					<Link to={ `/post/edit/${ post._id }` }>*/}
			{/*						<button className="btn btn-editar mb-3">Editar</button>*/}
			{/*					</Link>*/}
			{/*					<button className="btn btn-eliminar" onClick={ () => deletePost(post._id) }>Borrar</button>*/}
			{/*				</td>*/}
			{/*			</tr>*/}
			{/*		)) }*/}
		</section>);
}

export default Panel;
