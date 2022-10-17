import { useState, useEffect, useRef } from "react";
import { getAllPosts, Published, borrarPost } from "../api/Post.api";
import { Link } from "react-router-dom";
import { CheckIcon, PencilAltIcon, SearchIcon, TrashIcon, XIcon } from "@heroicons/react/outline";


function Panel() {
	const [ posts, setPosts ]                 = useState([]);
	const [ postsToFilter, setPostsToFilter ] = useState([]);
	const [ enable, setEnable ]               = useState(false);
	const [ searchPost, setSearchPost ]       = useState({
		search: ''
	});
	
	const { search } = searchPost;
	
	useEffect(() => {
		getAllPosts().then(posts => {
			setPosts(posts);
			setPostsToFilter(posts);
		});
	}, [ enable ]);
	
	const deletePost = id => {
		borrarPost(id).then(() => {
			getAllPosts().then(posts => {
				setPosts(posts);
			});
		});
	};
	
	const filterPostsByWord = (word) => {
		setPosts(post => post = postsToFilter.filter(post => post.title.toLowerCase().includes(word.toLowerCase())));
	};
	
	const handleSearchPost = ({ target }) => {
		setSearchPost({
			[target.name]: target.value
		});
		
		filterPostsByWord(target.value);
	};
	
	const enablePost = id => {
		Published(id).then(r => {
			console.log(r); // Acá activaríamos la notificación
			setEnable(enableState => !enableState);
		});
	};
	
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
								<input type="text" id="table-search" name="search" value={ search }
								       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
								       placeholder="Busca un post por título" onChange={ handleSearchPost } />
							</div>
						</div>
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 table-fixed">
								<thead className="bg-gray-100">
									<tr>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Título
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Texto
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Fecha de publicación
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Status
										</th>
										<th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{ posts.map(post => (
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={ post._id }>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{ post.title }</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">{ post.text }</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">{ post?.created }</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500">
												{/*@formatter:off*/}
												{
													(post.isPublic) && (
														<div className="flex items-center gap-2 border-2 border-green-600 rounded py-2 px-3 w-fit text-green-600 bg-green-50">
															<CheckIcon className="h-5" /> Publicado
														</div>
													)
												}
												{
													
													(!post.isPublic) && (
														<div className="flex items-center gap-2 border-2 border-red-600 rounded py-2 px-3 w-fit text-red-600 bg-red-50">
															<XIcon className="h-5" /> No publicado
														</div>
													)
												}
												{/*@formatter:on*/ }
											</td>
											<td className="py-4 px-6 text-sm font-medium whitespace-nowrap space-y-3 flex flex-col items-end">
												<Link to={ `/post/editar/${ post._id }` } className="border text-white flex items-center gap-2 rounded px-4 py-2 bg-blue-600 w-fit">
													<PencilAltIcon className="h-5" /> Editar </Link>
												<button className="border text-white flex items-center gap-2 rounded px-4 py-2 bg-red-600 w-fit"
												        onClick={ () => deletePost(post._id) }>
													<TrashIcon className="h-5" /> Borrar
												</button>
												{/*@formatter:off*/}
												{
													(!post.isPublic) && (
														<button className="border text-white flex items-center gap-2 rounded px-4 py-2 bg-yellow-600 w-fit"
														        onClick={ () => enablePost(post._id) }>
															<CheckIcon className="h-5" /> Publicar </button>
													)
												}
												{/*@formatter:on*/ }
											</td>
										</tr>
									)) }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{/*		{ posts.map(post => (*/ } {/*			<tr key={ post._id }>*/ } {/*				<td>{ post.title }</td>*/ } {/*				<td>{ post.text }</td>*/ } {/*				<td>*/ } {/*					<a href="/" className={ post.public ? 'btn btn-ok mb-3' : 'btn btn-habilitar mb-3' } onClick={ () => update(post._id) }>{ post.public ? 'Listo' : 'Habilitar' }</a>*/ } {/*					<Link to={ `/post/edit/${ post._id }` }>*/ } {/*						<button className="btn btn-editar mb-3">Editar</button>*/ } {/*					</Link>*/ } {/*					<button className="btn btn-eliminar" onClick={ () => deletePost(post._id) }>Borrar</button>*/ } {/*				</td>*/ } {/*			</tr>*/ } {/*		)) }*/ }
		</section>);
}

export default Panel;
