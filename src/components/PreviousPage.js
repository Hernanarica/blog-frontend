import React from 'react';
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function PreviousPage() {
	const navigate = useNavigate();
	
	const handlePreviousPage = () => {
		navigate(-1);
	};
	
	return (
		<button className="bg-blue-600 rounded-full p-2 absolute top-24 left-10" onClick={ handlePreviousPage }>
			<ChevronLeftIcon className="h-5 text-white" />
		</button>
	);
}

export default PreviousPage;