
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ShowOrderList from '@/components/ShowOrderList';
import OrderTable from '@/components/OrderTable';

const OrderPage = () => {
    return (
        <div className='main-container'>
            <SectionTitle title="My Orders"/>

            <section>
<section className='flex justify-between items-center py-5 px-2 bg-red-300 rounded-md mb-10'> 
<div className='flex items-center gap-3'>
<span className="text-xl">Orders:</span> <ShowOrderList/>
</div>
<div>
<span className="text-xl mr-3">Totals:</span>
</div>
</section>

<section>
<OrderTable/>
</section>
            </section>
        </div>
    );
};

export default OrderPage;