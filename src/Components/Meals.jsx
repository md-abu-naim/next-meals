"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('a')
    const [meals, setMeals] = useState([])

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            if (data?.meals) {
                setMeals(data.meals);
            } else {
                console.error('No meals found');
                setMeals([]); // Set to an empty array or handle accordingly
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const handler = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        loadData()
       
    }, [search ])

    return (
        <div>
            <div className="pt-5 flex gap-6">
                <input
                onChange={handler}
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-primary w-full max-w-xs" />

                <button className="btn btn-outline btn-error">Search</button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4">
            
                {
                    meals.length === 0 ? <h1>No Data Found Please search</h1> : 
                    meals?.map(meal => <div key={meal.id} className="border p-4">
                        <Image src={meal.strMealThumb} alt={meal.strtMeal} width={400} height={400} />
                        <h1>{meal.strtMeal}</h1>
                        <p>{meal.strInstructions}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Meals;