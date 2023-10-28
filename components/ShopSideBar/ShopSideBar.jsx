"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import PriceRange from './PriceRange/PriceRange';
import Brand from './Brand';
import ProcessorType from "./ProcessorType";
import ProcessorModel from "./ProcessorModel";

const ShopSideBar = () => {
    const itemClasses = {
        root: 'my-accordion-item',
        header: 'my-accordion-header',
        content: 'my-accordion-content',
    }

    return (
        <Accordion className="!px-0" itemClasses={itemClasses} variant="splitted" selectionMode="multiple" defaultSelectedKeys={`all`} isCompact>
            <AccordionItem
                className='!shadow'
                key="1"
                aria-label="Price Range"
                title={<span className="font-semibold">Price Range</span>}
            >
                <PriceRange />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="2"
                aria-label="Brand"
                title={<span className="font-semibold">Band</span>}
            >
                <Brand />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="3"
                aria-label="Processor Type"
                title={<span className="font-semibold">Processor Type</span>}
            >
                <ProcessorType />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="4"
                aria-label="Processor Model"
                title={<span className="font-semibold">Processor Model</span>}
            >
                <ProcessorModel />
            </AccordionItem>
        </Accordion >
    );
};

export default ShopSideBar;