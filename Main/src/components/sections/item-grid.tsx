"use client"

import { useEffect, useState } from 'react';
import { CardItem } from '../ui/item-card';
import { ItemType } from '@/lib/types/item';

interface ItemGridProps {
    itemsDefault: ItemType[];
}


export function ItemGrid({ itemsDefault }: ItemGridProps) {
    const [items, setItems] = useState<ItemType[]>(itemsDefault);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            // const newItems = await prisma.item.findMany({
            //     skip: (page - 1) * 10,
            //     take: 10,
            // });
            // setItems(prevItems => [...prevItems, ...newItems]);
            setLoading(false);
        };

        loadItems();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {items.map((item, index) => (
                <CardItem key={index} title={item.name} description={item.description} image={item.image} id={item.id} />
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );
}