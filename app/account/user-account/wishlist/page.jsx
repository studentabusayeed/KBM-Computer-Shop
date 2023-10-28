import ProductCard from '@/components/CardDesign/ProductCard';
import WishListCard from '@/components/CardDesign/WishListCard';
// import SectionTitle from '@/components/SectionTitle';
import React from 'react';

const WishlistPage = ({params, searchParams}) => {
console.log(params);
    return (
        <div>
          {/* <SectionTitle title="My Wishlist"/> */}
          <section>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                       
                    </div>
          </section>
        </div>
    );
};

export default WishlistPage;