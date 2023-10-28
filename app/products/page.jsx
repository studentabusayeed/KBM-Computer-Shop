import ProductCard from '@/components/CardDesign/ProductCard';
import ProductSortingMenu from '@/components/ProductSortingMenu';
import ShopSideBar from '@/components/ShopSideBar/ShopSideBar';

const ProductsPage = () => {
    return (
        <section>
            <div className="kbm-container !pt-0 flex gap-3">
                <div className='basis-1/4'>
                    <ShopSideBar />
                </div>
                <div className='basis-3/4'>
                    {/* <h3 className='text-xl font-bold'>main content</h3> */}
                    <div className='flex justify-between items-center mb-5 py-3 px-5 bg-[#69b46b] bg-opacity-10 rounded-xl'>
                        <p><span className='font-bold'>19 </span> Products found</p>
                        <ProductSortingMenu />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;