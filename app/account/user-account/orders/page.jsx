
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ShowOrderList from '@/components/ShowOrderList';
import OrderTable from '@/components/OrderTable';

const OrderPage = () => {
    return (
        <div className='main-container'>
            <SectionTitle title="My Orders"/>

            <section>
<div className="flex items-center gap-5"><span className="text-xl">Orders:</span> <ShowOrderList/></div>
<div className="flex justify-between px-3 py-8">
          <h1 className="font-semibold text-2xl">Total Items:</h1>
          <h2 className="font-semibold text-2xl">3</h2>
        </div>

<section>
<OrderTable/>
</section>
            </section>
        </div>
    );
};

export default OrderPage;