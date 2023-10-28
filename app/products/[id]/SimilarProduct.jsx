import ProductCard from '@/components/CardDesign/ProductCard';

const SimilarProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 bg-gray-100 p-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default SimilarProduct;