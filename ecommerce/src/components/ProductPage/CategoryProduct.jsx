import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
    const { category } = useParams(); // Get category from URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products by category
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <div className="p-8">Loading products...</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="font-primary font-bold text-3xl text-[#262626] mb-8 capitalize">
                {category} Products
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-primary font-semibold text-lg mb-2 text-[#262626]">
                                {product.title}
                            </h3>
                            <p className="text-[#767676] text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-primary font-bold text-xl text-[#262626]">
                                    ${product.price}
                                </span>
                                {product.discountPercentage > 0 && (
                                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                                        -{product.discountPercentage}%
                                    </span>
                                )}
                            </div>
                            <div className="mt-3">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">★</span>
                                    <span className="ml-1 text-sm text-[#767676]">
                                        {product.rating} ({product.stock} in stock)
                                    </span>
                                </div>
                            </div>
                            <button className="w-full mt-4 bg-[#262626] text-white py-2 rounded hover:bg-[#404040] transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#767676] text-lg">No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryProducts;