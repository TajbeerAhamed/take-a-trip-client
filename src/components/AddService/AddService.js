import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
	const [form, setForm] = useState({});
    const [reviews ,setReviews]= useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user); 

    // const getReviewData = async()=>{
    //   const response = await  fetch('https://citro-golpo.vercel.app/reviews')
    //     const data = await response.json();
    //     return data;
    // }


    useEffect(()=>{
        fetch('https://take-a-trip-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    // const reviews = useLoaderData();
    // console.log(reviews);

    const handleReviewSubmit = event => {
        event.preventDefault();
        console.log(form);



        if (user?.uid) {
            fetch("https://take-a-trip-server.vercel.app/services", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(form),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        alert("Review Added Successfully");
                        form.reset();
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Please login first to provide review!");



        }
    }
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newForm = { ...form }
        newForm[field] = value;
        setForm(newForm)
    }
    return (
<div>

<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
	
	<form onSubmit={handleReviewSubmit} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Add Service</label>
				<input onChange={handleInputBlur} type="text" name="text" id="text" placeholder="Enter Services" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div className="flex flex-col w-full">
                            <textarea onChange={handleInputBlur} rows="3" type="description" id="description" name="description" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-white">Leave Review</button>
                        </div>
			<div>
				
			
			</div>
		</div>
		<div className="space-y-2">
		
		
		</div>
	</form>
</div>
</div>
    );
};

export default AddService;